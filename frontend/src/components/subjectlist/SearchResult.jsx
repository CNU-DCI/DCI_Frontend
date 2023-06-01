import styled from "@emotion/styled";
import { FaSistrix } from "react-icons/fa";

import "../../styles/SubjectList.css";
import { useState } from "react";

const DUMMY_DATA = [
  {
    subject: "알고리즘",
    grade: 3,
    sbjnum: "1215-1003",
    department: "공과대 컴퓨터융합학부",
    classification: "전공(기초)",
    professor: "김교수",
  },
  {
    subject: "자료구조",
    grade: 2,
    sbjnum: "1215-1004",
    department: "공과대 컴퓨터융합학부",
    classification: "전공(기초)",
    professor: "박교수",
  },
];

const SearchResultDiv = styled.div`
  width: 100%;
  height: 30%;
`;

const SearchResultTitle = styled.div`
  width: 100%;
`;

const SearchResultTitleP = styled.p`
  font-size: 20px;
  font-weight: bold;
  display: inline-block;
  padding: 0;
  margin: 0;
`;

const ResultCountP = styled.p`
  font-size: 13px;
  display: inline-block;
  padding-left: 5px;
  margin: 0;
`;

const ResultTableDiv = styled.div`
  width: 100%;
`;

const ResultHead = styled.div`
  width: 80%;
  background-color: #d9d9d9;
  border-radius: 19px;
  margin-bottom: 5px;
`;

const ResultBody = styled.div`
  width: 80%;
  border-radius: 19px;
  display: block;
  border: 1px solid #d9d9d9;
  margin-bottom: 3px;
`;

const ResultTableP = styled.p`
  font-size: 13px;
  font-weight: bold;
  display: inline-block;
  text-align: center;
`;
const SearchResult = () => {
  const [result, setResult] = useState(DUMMY_DATA);
  return (
    <SearchResultDiv>
      <SearchResultTitle>
        <SearchResultTitleP>
          <FaSistrix class="title_magnify_icon" size="24" />
          검색결과
        </SearchResultTitleP>
        <ResultCountP>총 {result.length}개</ResultCountP>
      </SearchResultTitle>
      <ResultTableDiv>
        {result.length !== 0 && (
          <ResultHead>
            <ResultTableP style={{ width: "25%" }}>과목명</ResultTableP>
            <ResultTableP style={{ width: "5%" }}>학년</ResultTableP>
            <ResultTableP style={{ width: "20%" }}>과목번호</ResultTableP>
            <ResultTableP style={{ width: "25%" }}>개설학과</ResultTableP>
            <ResultTableP style={{ width: "15%" }}>이수구분</ResultTableP>
            <ResultTableP style={{ width: "10%" }}>담당교수</ResultTableP>
          </ResultHead>
        )}
        {result.map((subjects, idx) => (
          <ResultBody>
            <ResultTableP style={{ width: "25%" }}>
              {subjects.subject}
            </ResultTableP>
            <ResultTableP style={{ width: "5%" }}>
              {subjects.grade}
            </ResultTableP>
            <ResultTableP style={{ width: "20%" }}>
              {subjects.sbjnum}
            </ResultTableP>
            <ResultTableP style={{ width: "25%" }}>
              {subjects.department}
            </ResultTableP>
            <ResultTableP style={{ width: "15%" }}>
              {subjects.classification}
            </ResultTableP>
            <ResultTableP style={{ width: "10%" }}>
              {subjects.professor}
            </ResultTableP>
          </ResultBody>
        ))}
      </ResultTableDiv>
    </SearchResultDiv>
  );
};

export default SearchResult;
