import styled from "@emotion/styled";
import { SearchSubjectList } from "../components/subjectlist";

const SubjectListDiv = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const SubjectList = () => {
  return (
    <SubjectListDiv>
      <SearchSubjectList />
    </SubjectListDiv>
  );
};

export default SubjectList;
