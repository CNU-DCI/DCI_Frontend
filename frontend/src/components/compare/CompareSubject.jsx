import styled from "@emotion/styled";
import { CpSbjComponent } from ".";
import "styles/SubjectList.css";
import Add from "img/Add.png";

const CompareSubjectDiv = styled.div`
  width: 80%;
  height: 30vh;
  padding-bottom: 50px;
`;

const CompareTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  padding: 0;
  margin: 0;
  padding-bottom: 5px;
`;

const CompareComponentDiv = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: scroll;
  overflow: auto;
  white-space: nowrap;
`;

const AddSubjectDiv = styled.div`
  width: 30px;
  height: 95%;
  display: inline-block;
`;

const CompareSubject = () => {
  return (
    <CompareSubjectDiv>
      <CompareTitle>데이터 비교</CompareTitle>
      <CompareComponentDiv className="comparesbj">
        <CpSbjComponent />
        <CpSbjComponent />
        <CpSbjComponent />
        <CpSbjComponent />
        <CpSbjComponent />
        <img
          src={Add}
          alt="add"
          style={{ width: 20, verticalAlign: "middle" }}
        />
      </CompareComponentDiv>
    </CompareSubjectDiv>
  );
};

export default CompareSubject;
