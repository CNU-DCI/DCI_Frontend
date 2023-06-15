import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import "styles/SubjectList.css";
import { MINT } from "constants/color";
import KakaoMap from "components/map/KakaoMap";
import { useParams } from "react-router";
import timetable from "img/timetable.png";
import { getStatistics } from "services/api";

const DeviceDiv = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const TitleDiv = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
`;

const ParagraphDiv = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
`;

const SubjectTitle = styled.p`
  font-size: 35px;
  font-weight: bold;
  display: inline-block;
  vertical-align: bottom;
  height: 40px;
`;

const TitleSub = styled.span`
  width: 150px;
  font-size: 15px;
  font-weight: bold;
  display: inline-block;
  vertical-align: bottom;
  padding-top: 20px;
  margin-left: 10px;
`;

const TitleBackground = styled.div`
  background-color: #51d2e3;
  height: 30vh;
  width: 100%;
`;

const SummaryDiv = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  place-items: center;
`;

const DetailDiv = styled.div`
  width: 80%;
  height: 70vh;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.15);
`;

const SubjectDetailDiv = styled.div`
  width: 28%;
  height: 90%;
  background-color: white;
  margin-right: 2%;
  padding: 5%;
`;

const SubjectSummaryDiv = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubjectResultDiv = styled.div`
  width: 70%;
  height: 90%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TimeTableDiv = styled.div`
  width: 50%;
  height: 100%;
  border-right: 2px solid #3c73b9;
`;

const MapDiv = styled.div`
  width: 50%;
  height: 100%;
  margin: 0 auto;
`;

const Row = styled.div`
  width: 100%;
  height: 68%;
  margin-bottom: 2%;
  display: flex;
`;

const EvaluationDiv = styled.div`
  width: 90%;
  height: 20%;
  padding: 5px 0;
  border-top: 2px solid #3c73b9;
  margin: 0 auto;
`;

const GraphDiv = styled.div`
  width: 80%;
  height: 70vh;
  margin: 0 auto;
  margin-top: 2%;
  border-top: 1px solid #50d2e3;
`;

const ButtonRow = styled.div`
  width: 100%;
  height: 15%;
`;

const RowDiv = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: ${({ alignItem }) => alignItem};
`;

const ContentTitleDiv = styled.div`
  width: 90%;
  height: 10%;
`;

const ContentTitle = styled.p`
  font-size: 15px;
  font-weight: bold;
  padding-left: 5%;
  box-sizing: border-box;
`;

const ContentTitleSpan = styled.span`
  font-weight: 15px;
  font-weight: bold;
  color: #50d2e3;
`;

const SelectDiv = styled.div`
  height: 25px;
  border: 1px solid ${MINT};
  margin-right: 10px;
  min-width: ${({ min }) => min + "px"};
`;

const SelectSection = styled.select`
  border: none;
  font-size: 15px;
  font-weight: bold;
  min-width: ${({ min }) => min + "px"};
`;

const SelectP = styled.p`
  font-size: 15px;
  display: inline-block;
  margin: 0;
  padding: 0 5px;
  color: #888888;
`;

const PeriodBtn = styled.button`
  height: 25px;
  width: 120px;
  text-align: center;
  border: 1px solid black;
  background-color: white;
  margin-right: 10px;
  font-weight: bold;
`;

const EvaluteTable = styled.table`
  margin-top: 2%;
  width: 100%;
  height: 50%;
  text-align: center;
  border: 1px solid black;
  border-collapse: collapse;
  table-layout: fixed;
`;

const EvaluateTr = styled.tr`
  border: 1px solid black;
  border-collapse: collapse;
`;

const EvaluateTh = styled.th`
  border: 1px solid black;
  border-collapse: collapse;
  background-color: #51d2e3;
`;

const EvaluateTd = styled.td`
  border: 1px solid black;
  border-collapse: collapse;
`;

const TimeTableImg = styled.img`
  width: 90%;
  margin: 0 auto;
  margin-top: 5%;
`;

const SubjectDetail = styled.p`
  font-size: 20px;
  height: 30%;
  font-weight: bold;
`;

const DivisionDiv = styled.div`
  height: 10%;
  width: 100%;
  padding: 3%;
`;
const Division = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-decoration: underline;
`;

const CorrDiv = styled.div`
  width: 20%;
  height: 80%;
  background-color: ${({ stat }) => (stat === 0 ? "#1F77FB" : "#FF3838")};
  color: white;
  font-size: 35px;
  display: flex;
  font-weight: bold;
  border: none;
  margin-right: 2%;
  align-items: center;
  justify-content: center;
`;

const PercentDiv = styled.div`
  width: 30%;
  height: 80%;
  border: 1px solid #a4a4a4;
  color: black;
  font-size: 35px;
  display: flex;
  text-align: center;
  font-weight: bold;
  margin-right: 2%;
  align-items: center;
  justify-content: center;
`;

const CompeteDiv = styled.div`
  width: 40%;
  height: 80%;
  background-color: ${({ stat }) => (stat === 0 ? "#1F77FB" : "#FF3838")};
  color: white;
  font-size: 35px;
  display: flex;
  font-weight: bold;
  text-align: center;
  border: none;
  align-items: center;
  justify-content: center;
`;

const ExplainText = styled.p`
  font-size: 15px;
  font-weight: bold;
  display: inline-block;
  text-align: center;
`;

const TextDiv = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Popup = () => {
  const { subjectId } = useParams();
  const results = JSON.parse(localStorage.getItem("result"));
  const subject = results.filter((result) => result.subjectID === subjectId);
  const [stat, setStat] = useState([]);

  useEffect(() => {
    console.log(subject);
  }, [subject]);

  useEffect(() => {
    getStatistics(subjectId).then((res) => setStat(res));
  }, [subjectId]);

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
    <DeviceDiv>
      <TitleBackground>
        <TitleDiv>
          <ParagraphDiv>
            <SubjectTitle>
              {subject.length !== 0 && subject[0].openSbjtNm}
            </SubjectTitle>
            <TitleSub>과목의 분석 결과</TitleSub>
          </ParagraphDiv>
          <SummaryDiv>
            <SubjectDetailDiv>
              <SubjectDetail>
                {subject.length !== 0 &&
                subject[0].degrNmSust[subject[0].degrNmSust.length - 1] === "학"
                  ? subject[0].degrNmSust + "과"
                  : subject[0].degrNmSust}
              </SubjectDetail>
              <SubjectDetail>{subject[0].cptnDivNm}</SubjectDetail>
              <SubjectDetail>{subject[0].profInfo}</SubjectDetail>
            </SubjectDetailDiv>
            <SubjectResultDiv>
              <SubjectSummaryDiv>
                <CorrDiv stat={CalcRate(stat.correctedRate)}>
                  {stat.length !== 0 && stat.correctedNum} 명
                </CorrDiv>
                <PercentDiv>
                  {stat.length !== 0 && parseInt(stat.comp_rate * 100)} %
                </PercentDiv>
                <CompeteDiv stat={stat && calcLevel(stat.comp_level)}>
                  {stat && calcLevel(stat.comp_level) === 0
                    ? "낮은 경쟁률"
                    : "높은 경쟁률"}
                </CompeteDiv>
              </SubjectSummaryDiv>
              <TextDiv>
                <ExplainText style={{ width: "20%", marginRight: "2%" }}>
                  정정인원
                </ExplainText>
                <ExplainText style={{ width: "30%", marginRight: "2%" }}>
                  1분 이내 수강신청 비율
                </ExplainText>
                <ExplainText style={{ width: "40%" }}></ExplainText>
              </TextDiv>
            </SubjectResultDiv>
          </SummaryDiv>
        </TitleDiv>
      </TitleBackground>
      <DetailDiv className="subjectDetail">
        <DivisionDiv>
          <Division>
            {subject.length !== 0 && subject[0].subjectID.substr(-2)}분반
          </Division>
        </DivisionDiv>
        <Row>
          <TimeTableDiv>
            <ContentTitle>
              <ContentTitleSpan>시간표</ContentTitleSpan> 월 12:00 ~ 13:30, 화
              12:00 ~ 13: 30
            </ContentTitle>
            <TimeTableImg src={timetable} alt="timetable" />
          </TimeTableDiv>
          <MapDiv>
            <ContentTitleDiv>
              <ContentTitle>
                <ContentTitleSpan>강의실</ContentTitleSpan> 공과대학 1호관 401호
              </ContentTitle>
            </ContentTitleDiv>
            <KakaoMap />
          </MapDiv>
        </Row>
        <EvaluationDiv>
          <ContentTitle>평가방법</ContentTitle>
          <EvaluteTable>
            <EvaluateTr>
              <EvaluateTh>중간고사</EvaluateTh>
              <EvaluateTh>기말고사</EvaluateTh>
              <EvaluateTh>퀴즈</EvaluateTh>
              <EvaluateTh>출석</EvaluateTh>
              <EvaluateTh>과제</EvaluateTh>
            </EvaluateTr>
            <EvaluateTr>
              <EvaluateTd>X</EvaluateTd>
              <EvaluateTd>50</EvaluateTd>
              <EvaluateTd>10</EvaluateTd>
              <EvaluateTd>10</EvaluateTd>
              <EvaluateTd>30</EvaluateTd>
            </EvaluateTr>
          </EvaluteTable>
        </EvaluationDiv>
      </DetailDiv>
      <GraphDiv>
        <ButtonRow>
          <RowDiv alignItem="end">
            <SelectDiv>
              <SelectSection min={60}>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </SelectSection>
              <SelectP>년도</SelectP>
            </SelectDiv>
            <SelectDiv>
              <SelectSection min={50}>
                <option value="first_semester">1학기</option>
                <option value="second_semester">2학기</option>
              </SelectSection>
            </SelectDiv>
          </RowDiv>
          <RowDiv alignItem="center">
            <PeriodBtn>본수강신청</PeriodBtn>
            <PeriodBtn>전학년 수강신청</PeriodBtn>
            <PeriodBtn>정정기간</PeriodBtn>
          </RowDiv>
        </ButtonRow>
      </GraphDiv>
    </DeviceDiv>
  );
};

export default Popup;
