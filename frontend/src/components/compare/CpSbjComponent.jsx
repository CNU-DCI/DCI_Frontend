import styled from "@emotion/styled";
import X from "img/X.png";
import { useEffect } from "react";

const CompareSbjDiv = styled.div`
  width: 250px;
  height: 95%;
  border: 1px solid #d9d9d9;
  display: inline-block;
  margin-right: 10px;
`;

const RowDiv = styled.div`
  width: 100%;
`;

const ColumnDiv = styled.div`
  width: 90%;
  height: 100%;
  display: inline-block;
`;

const CompeteDiv = styled.div`
  width: 80px;
  color: white;
  background-color: ${({ stat }) => (stat === 0 ? "#1F77FB" : "#ff3838")};
  font-size: 13px;
  text-align: center;
  display: inline-block;
  margin: 0 5px;
`;

const SubjectTitle = styled.p`
  font-size: 13px;
  font-weight: bold;
  display: inline-block;
  padding-left: 5px;
  margin: 0;
`;

const SubjectDetail = styled.p`
  font-size: 10px;
  display: inline-block;
  padding-left: 5px;
  margin: 0;
`;

const CountDiv = styled.div`
  width: 70px;
  height: 60px;
  text-align: center;
  display: inline-block;
  border: 1px solid #a4a4a4;
  margin-left: 5px;
  margin-top: 10px;
  background-color: ${({ stat }) => (stat === 0 ? "#1F77FB" : "#FF3838")};
`;

const CountTextDiv = styled.div`
  width: 70px;
  text-align: center;
  display: inline-block;
  margin-left: 5px;
`;

const TimeDiv = styled.div`
  width: 160px;
  height: 60px;
  text-align: center;
  display: inline-block;
  border: 1px solid #a4a4a4;
  margin-left: 5px;
  background-color: ${({ stat }) => (stat === 0 ? "#1F77FB" : "#FF3838")};
`;

const TimeTextDiv = styled.div`
  width: 160px;
  text-align: center;
  display: inline-block;
  margin-left: 5px;
`;

const DataP = styled.p`
  font-size: 18px;
  font-weight: bold;
  line-height: 60px;
`;

const RemoveIcon = styled.img`
  width: 13px;
  height: 13px;
  margin: 0;
  padding: 0;
  display: inline-block;
`;

const CpSbjComponent = ({ idx, data, removeData, stat }) => {
  const removeCart = (e) => {
    removeData(e.target.dataset.key);
  };

  useEffect(() => {
    console.log(stat);
  }, [stat]);

  const calcLevel = (d) => {
    /*comp_level이 1 or 2인 경우 낮음, 3 or 4인 경우 높음 */
    if (d === 1 || d === 2) {
      return 0;
    } else {
      return 1;
    }
  };

  const CalcRate = (r) => {
    /*정정인원 비율이 0.1 보다 큰 경우 높은 것으로 판단 */
    if (r > 0.1) {
      return 1;
    } else {
      return 0;
    }
  };

  return (
    <CompareSbjDiv key={idx}>
      <RowDiv>
        <ColumnDiv>
          <CompeteDiv stat={stat && calcLevel(stat.comp_level)}>
            {stat && calcLevel(stat.comp_level) === 0
              ? "낮은 경쟁률"
              : "높은 경쟁률"}
          </CompeteDiv>
        </ColumnDiv>
        <RemoveIcon data-key={idx} src={X} alt="x" onClick={removeCart} />
      </RowDiv>
      <RowDiv>
        <SubjectTitle>{data.openSbjtNm}</SubjectTitle>
        <SubjectDetail>{data.openSbjtNo}</SubjectDetail>
      </RowDiv>
      <SubjectDetail>
        {data.degrNmSust[data.degrNmSust.length - 1] === "학"
          ? data.degrNmSust + "과"
          : data.degrNmSust}
      </SubjectDetail>
      <RowDiv>
        <CountDiv stat={stat && CalcRate(stat.correctedRate)}>
          <DataP>{stat && stat.correctedNum}명</DataP>
        </CountDiv>
        <TimeDiv stat={stat && calcLevel(stat.comp_level)}>
          <DataP>{stat && parseInt(stat.comp_rate * 100)} %</DataP>
        </TimeDiv>
      </RowDiv>
      <RowDiv>
        <CountTextDiv>
          <SubjectDetail>정정횟수</SubjectDetail>
        </CountTextDiv>
        <TimeTextDiv>
          <SubjectDetail>1분 이내 수강신청 비율</SubjectDetail>
        </TimeTextDiv>
      </RowDiv>
    </CompareSbjDiv>
  );
};

export default CpSbjComponent;
