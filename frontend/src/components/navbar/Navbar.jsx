import styled from "@emotion/styled";
import { FaSistrix } from "react-icons/fa";
import header from "img/header.png";

const HeaderSize = styled.div`
  width: 100%;
`;

const Navbar = () => {
  return (
    <div style={{ position: "fixed" }}>
      <img src={header} style={{ width: "100vw" }}></img>
      <a href="/">홈</a>
      <a href="/subjectList">과목목록</a>
    </div>
  );
};

export default Navbar;
