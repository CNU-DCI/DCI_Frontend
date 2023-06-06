import styled from "@emotion/styled";
import { Cart, SearchResult, SearchSubjectList } from "components/subjectlist";
import { CompareSubject, YearCompare } from "components/compare";

import { Navbar } from "components/navbar";
import Chaveron from "img/Chaveron.png";
import "styles/SubjectList.css";
import { useEffect, useRef } from "react";

const DIVIDER_HEIGHT = 5;

const OuterDiv = styled.div`
  height: 100vh;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

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
  const outerDivRef = useRef();

  /*
  useEffect(() => {

    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
        } else {
          console.log("현재 2페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else {
          // 현재 3페이지
          console.log("현재 2페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    };

    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);
  */

  return (
    <>
      <Navbar></Navbar>
      <OuterDiv ref={outerDivRef}>
        <SubjectListDiv>
          <SearchSubjectList />
          <SearchResult />
          <img src={Chaveron} alt="Chaveron" class="chaveron_icon" />
          <Cart outer={outerDivRef} />
        </SubjectListDiv>
        <SubjectListDiv>
          <CompareSubject outer={outerDivRef} />
          <YearCompare />
        </SubjectListDiv>
      </OuterDiv>
    </>
  );
};

export default SubjectList;
