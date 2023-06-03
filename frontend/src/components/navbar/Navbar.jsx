import styled from "@emotion/styled";
import { FaSistrix } from "react-icons/fa";
import header from "img/header.png";


const MenuArea = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  right: 2%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
  

  a {
    margin-right: 25px;
    transition: 0.3s;
  }

  a:hover{
    font-weight: bold;
    color: white;
  }
`
const SrcBox = styled.div`
  width: 12vw;
  background-color: white;
  border-radius: 15px;
  display: flex;
  align-items: center;
`
const SearchInput = styled.p`
  color: #072A5F;
  font-size: 0.8rem;
  margin-left: 10%;
  width: 85%;

  &:focus {
    outline: none;
    color: black;
  }
`;



const Navbar = () => {
  return (

    <div style={{position: "fixed"}}>
      <img src={header} style={{ width: "100vw"}}></img>
      <MenuArea>
        <a href="/">홈</a>
        <a href="/subjectList">과목검색</a>
        <SrcBox>
          <SearchInput contentEditable="true" placeholder="과목명으로 검색하기" maxLength="10"></SearchInput>
          <FaSistrix color="#072A5F" style={{marginRight:"10px"}}/>
        </SrcBox>
      </MenuArea>

    </div>

  );
};

export default Navbar;
