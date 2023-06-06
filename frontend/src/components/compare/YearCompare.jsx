import styled from "@emotion/styled";

const YearCompareDiv = styled.div`
  width: 80%;
  height: 60vh;
  border: 1px solid #888888;
`;

const CompareTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  padding: 0;
  margin: 0;
  padding-bottom: 5px;
`;

const YearCompare = () => {
  return (
    <YearCompareDiv>
      <CompareTitle>연도별 비교</CompareTitle>
    </YearCompareDiv>
  );
};

export default YearCompare;
