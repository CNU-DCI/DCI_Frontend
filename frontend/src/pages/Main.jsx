import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { Navbar } from "components/navbar/index";
import { Dday } from "components/Dday/index";
import slide01 from "img/slide01.png";
import { ReactComponent as Award } from "img/Award.svg";
import { ReactComponent as Search } from "img/Search.svg";
import { ReactComponent as Computer } from "img/Computer.svg";

const Layout80vw = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

const Icons = styled.div`
  width: 5vw;
  margin: 0 auto;
`;

const Main = () => {
  return (
    <>
      <Navbar />

      <img src={slide01} style={{ width: "100vw" }}></img>
      <Layout80vw>
        <Dday />

        <Icons>
          <Award />
        </Icons>
        <Icons>
          <Search />
        </Icons>
        <Icons>
          <Computer />
        </Icons>
      </Layout80vw>
    </>
  );
};

export default Main;
