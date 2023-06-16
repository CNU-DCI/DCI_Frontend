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
      getRegistration(cart[0].subjectID).then((res) => setData(res));
    }
  }, [cart]);

  useEffect(() => {
    if (data.length > 0) {
      const dt = data.map((d) => {
        let year = d.tlsn_APLY_DT.substr(0, 4);
        let month = d.tlsn_APLY_DT.substr(4, 2);
        let day = d.tlsn_APLY_DT.substr(6, 2);
        let hour = d.tlsn_APLY_DT.substr(8, 2);
        let minute = d.tlsn_APLY_DT.substr(10, 2);
        let second = d.tlsn_APLY_DT.substr(-2);
        console.log(year, month, day, hour, minute, second);
        /*
        return (
          [
      
            new Date(d.tlsn_APLY_DT),
            d.registrationNumber,
          ]
        )
        });
      console.log(dt);
        */
      });

      const series = [
        {
          name: "수강인원 분포", //will be displayed on the y-axis
          data: data.map((d) => [
            new Date(d.tlsn_APLY_DT).getTime(),
            d.registrationNumber,
          ]),
        },
      ];

      const options = {
        chart: {
          id: "area-datetime",
          type: "area",
          height: 350,
          zoom: {
            autoScaleYaxis: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "수강인원 분포",
          align: "left",
        },
        xaxis: {
          type: "datetime",
          min: new Date(data[0].tlsn_APLY_DT).getTime(),
          tickAmount: 6,
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
        />
      )}
    </YearCompareDiv>
  );
};

export default YearCompare;
