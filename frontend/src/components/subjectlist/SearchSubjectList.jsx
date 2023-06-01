import styled from "@emotion/styled";
import { LEMON, MINT } from "../../constants/color";
import { FaSistrix } from "react-icons/fa";
import "../../styles/SubjectList.css";

const SearchSubjectDiv = styled.div`
  width: 100%;
  height: 20%;
  border-bottom: 1px solid ${MINT};
  display: flex;
  margin: auto;
`;

const ContentDiv = styled.div`
  width: 50%;
  height: 100%;
`;

const RowDiv = styled.div`
  display: flex;
  margin: 10px 0;
`;

const SelectDiv = styled.div`
  border: 1px solid ${MINT};
  margin-right: 10px;
`;

const SelectSection = styled.select`
  border: none;
  font-size: 15px;
  font-weight: bold;
`;

const SelectP = styled.p`
  font-size: 15px;
  display: inline-block;
  margin: 0;
  color: #888888;
`;

const SearchSection = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid ${MINT};
  border-radius: 50px;
  background-color: #f8f8f8;
`;

const SearchInput = styled.p`
  color: #888888;
  font-size: 13px;
  padding-left: 5%;
  display: inline-block;
  box-sizing: border-box;
  width: 90%;
  border: none;

  &:focus {
    outline: none;
    color: black;
  }
`;

const SearchSubjectList = () => {
  return (
    <SearchSubjectDiv>
      <ContentDiv>
        <RowDiv>
          <SelectDiv>
            <SelectSection>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </SelectSection>
            <SelectP>년도</SelectP>
          </SelectDiv>
          <SelectDiv>
            <SelectSection>
              <option value="first_semester">1학기</option>
              <option value="summer_season">하기계절</option>
              <option value="second_semester">2학기</option>
              <option value="winter_season">동기계절</option>
            </SelectSection>
          </SelectDiv>
        </RowDiv>
        <RowDiv>
          <SelectDiv>
            <SelectP>이수구분</SelectP>
            <SelectSection>
              <option value="2023">교양</option>
            </SelectSection>
          </SelectDiv>
          <SelectDiv>
            <SelectP>학과</SelectP>
            <SelectSection>
              <option value="1학기">공과대 컴퓨터융합학부</option>
            </SelectSection>
          </SelectDiv>
        </RowDiv>
        <RowDiv>
          <SearchSection>
            <SearchInput
              contentEditable="true"
              placeholder="과목명, 교수명으로 검색해보세요"
            ></SearchInput>
            <FaSistrix class="magnify_icon" />
          </SearchSection>
        </RowDiv>
      </ContentDiv>
    </SearchSubjectDiv>
  );
};

export default SearchSubjectList;
