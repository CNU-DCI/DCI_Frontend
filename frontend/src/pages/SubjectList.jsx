import styled from "@emotion/styled";
import { Cart, SearchResult, SearchSubjectList } from "components/subjectlist";
import { CompareSubject, YearCompare } from "components/compare";
import { Navbar } from "components/navbar";
import Chaveron from "img/Chaveron.png";
import "styles/SubjectList.css";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import footer from "img/footer.png";
import { getRegistration } from "services/api";
import ApexCharts from "apexcharts";

const OuterDiv = styled.div`
  height: 100vh;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const SubjectListDiv = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 4vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
`;

const CompareListDiv = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
`;

const SubjectList = ({
  major,
  setCart,
  results,
  setResults,
  addCart,
  cart,
  removeData,
  stat,
}) => {
  const outerDivRef = useRef();

  //props from navbar, mostCom, keyword.jsx
  const location = useLocation();
  const [srcContents, setContents] = useState(location.state?.srcContents);

  return (
    <>
      <Navbar></Navbar>
      <OuterDiv ref={outerDivRef}>
        <SubjectListDiv>
          <SearchSubjectList
            major={major}
            setResults={setResults}
            srcContents={srcContents}
          />
          <SearchResult result={results} addCart={addCart} stat={stat} />
          <img src={Chaveron} alt="Chaveron" class="chaveron_icon" />
          <Cart
            outer={outerDivRef}
            result={cart}
            setResult={setCart}
            stat={stat}
          />
        </SubjectListDiv>
        <CompareListDiv>
          <CompareSubject
            outer={outerDivRef}
            results={cart}
            removeData={removeData}
            stat={stat}
          />
          <YearCompare cart={cart} />
        </CompareListDiv>
        <img src={footer} alt="footer" />
      </OuterDiv>
    </>
  );
};

export default SubjectList;
