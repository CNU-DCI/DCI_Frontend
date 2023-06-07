import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import {Layout80vw} from 'constants/layout';
import { Navbar } from "components/navbar/index";
import { Dday, Credit, Keywords, MostCompetition} from 'components/mainPage/index'
import slide01 from "img/slide01.png";

const MarginTopContainer = styled.div`
  
`

const Main = () => {
  return (
    <>
      <Navbar />
      <img src={slide01} style={{ width: "100vw" }}></img>
      <Layout80vw>
        <Dday />
        <MarginTopContainer>  
          <MostCompetition></MostCompetition>
          <Keywords></Keywords>
          <Credit></Credit>
        </MarginTopContainer>
      </Layout80vw>
    </>
  );
};

export default Main;
