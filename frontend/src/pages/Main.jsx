import { Navbar } from "components/navbar/index";

import slide01 from "img/slide01.png";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <img src={slide01} style={{ width: "100%" }}></img>
    </>
  );
};

export default Main;
