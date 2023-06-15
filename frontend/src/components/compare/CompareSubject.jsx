import styled from "@emotion/styled";
import { CpSbjComponent } from ".";
import "styles/SubjectList.css";
import Add from "img/Add.png";
import { useEffect, useState } from "react";
import { readAllStatistics } from "services/api";

const CompareSubjectDiv = styled.div`
  width: 80%;
  height: 20%;
  min-height: 170px;
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
  height: 80%;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  overflow: auto;
  white-space: nowrap;
`;

const CompareSubject = ({ outer, results, removeData, stat }) => {
  const MoveSbjListPage = () => {
    outer.current.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    console.log(results);
  }, []);

  return (
    <CompareSubjectDiv>
      <CompareTitle>데이터 비교</CompareTitle>
      <CompareComponentDiv className="comparesbj">
        {results.map((tmp) => (
          <CpSbjComponent
            idx={tmp.subjectID}
            data={tmp}
            removeData={removeData}
            stat={stat.filter((s) => s.subjectID === tmp.subjectID)[0]}
          />
        ))}
        <img
          src={Add}
          alt="add"
          style={{ width: 20, verticalAlign: "middle" }}
          onClick={MoveSbjListPage}
        />
      </CompareComponentDiv>
    </CompareSubjectDiv>
  );
};

export default CompareSubject;
