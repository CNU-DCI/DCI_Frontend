import styled from "@emotion/styled";
import { Cart, SearchResult, SearchSubjectList } from "components/subjectlist";
import CompareSubject from "components/compare/CompareSubject";

import { Navbar } from "components/navbar";
import Chaveron from "img/Chaveron.png";
import "styles/SubjectList.css";
const SubjectListDiv = styled.div`
  width: 100%;
  padding-top: 4vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
`;

const SubjectList = () => {
  return (
    <>
      <Navbar></Navbar>
      <SubjectListDiv>
        <SearchSubjectList />
        <SearchResult />
        <img src={Chaveron} alt="Chaveron" class="chaveron_icon" />
        <Cart />
        <CompareSubject />
      </SubjectListDiv>
    </>
  );
};

export default SubjectList;
