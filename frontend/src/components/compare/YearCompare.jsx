import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import ApexCharts from "apexcharts";
import { getRegistration } from "services/api";

const YearCompareDiv = styled.div`
  width: 80%;
  height: 55vh;
  border: 1px solid #888888;
`;

const CompareTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  padding: 0;
  margin: 0;
  padding-bottom: 5px;
`;

const ButtonsDiv = styled.div`
  width: 100%;
`;

const YearBtn = styled.button`
  width: 100px;
  height: 25px;
  margin: 0 5px;
  border: 1px solid #a4a4a4;
  background-color: ${({ clicked }) => (clicked ? "#51D2E3" : "white")};
  font-weight: bold;
`;

const YearCompare = ({ cart }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (cart.length !== 0) {
      getRegistration(cart[0].subjectID).then((res) => setData(res));
    }
  }, [cart]);

  let state = {
    series: [
      {
        name: "1",
        data: [1, 3, 2],
      },
      {
        name: "1",
        data: [3, 4, 2],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar"],
      },
    },
  };

  return (
    <YearCompareDiv>
      {/*
{data.length !== 0 && state.options && (
        <ApexCharts
          series={state.options}
          options={state.series}
          type="line"
          width={500}
          height={300}
        ></ApexCharts>
      )}
      */}
    </YearCompareDiv>
  );
};

export default YearCompare;
