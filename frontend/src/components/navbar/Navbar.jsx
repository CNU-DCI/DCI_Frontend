import styled from "@emotion/styled";
import { FaSistrix } from "react-icons/fa";
import header from "img/header.png";

const HeaderSize = styled.div`
  width: 100%;
`;

const MenuArea = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
`

const Navbar = () => {
  return (
    <div style={{position: "fixed"}}>
      <img src={header} style={{ width: "100vw"}}></img>
      <MenuArea>
        <a href="/">홈</a>
        <a href="/subjectList">과목목록</a> 
      </MenuArea>
    </div>
  );
};

export default Navbar;
