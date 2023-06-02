import styled from "@emotion/styled";
import { Navbar } from "components/navbar/index";

import slide01 from "img/slide01.png";


const Layout80vw = styled.div`
  width: 80vw;
  margin: 0 auto
`;


const Main = () => {
  return (
    <>
      <Navbar></Navbar>

      <img src={slide01} style={{ width: "100vw" }}></img>
      <Layout80vw>
        
      </Layout80vw>

    </>
  );
};

export default Main;
