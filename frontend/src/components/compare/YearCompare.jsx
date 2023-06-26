import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getRegistration } from "services/api";

const YearCompareDiv = styled.div`
  width: 80%;
  height: 55vh;
  border: 1px solid #888888;
`;

const YearCompare = ({ cart }) => {
  const [data, setData] = useState([]);
  const [options, setOptions] = useState(null);
  useEffect(() => {
    if (cart.length !== 0) {
      cart.map((c) =>
        getRegistration(c.subjectID).then((res) => setData([...data, res]))
      );
    }
  }, [cart]);

  useEffect(() => {
    if (data.length > 0) {
      const series = data.map((d) => {
        const dt = d.map((t) => {
          var date = new Date(
            t.tlsn_APLY_DT.replace(
              /^(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)$/,
              "$1-$2-$3 $4:$5:$6"
            )
          );
          return [date.getTime(), t.registrationNumber];
        });
        return {
          name: d.subjectID,
          data: dt,
        };
      });

      const options = {
        chart: {
          id: "area-datetime",
          type: "area",
          height: "100%",
          width: "100%",
          zoom: {
            autoScaleYaxis: true,
            zoomedArea: {},
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "수강인원 분포",
          align: "left",
        },
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          title: {
            text: "Registration Number",
          },
        },
        tooltip: {
          x: {
            format: "dd MMM yyyy",
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100],
          },
        },
        colors: ["#2E93fA", "#66DA26", "#E91E63", "#FF9800"],
      };
      setOptions({ series, options });
    }
  }, [data]);

  return (
    <YearCompareDiv>
      {data.length > 0 && options !== null && (
        <Chart
          options={options.options}
          type="line"
          series={options.series}
          width="100%"
          height="100%"
        />
      )}
    </YearCompareDiv>
  );
};

export default YearCompare;
