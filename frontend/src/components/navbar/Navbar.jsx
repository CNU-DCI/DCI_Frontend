import React, { useEffect, useRef, useState} from "react";
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

  a:hover {
    font-weight: bold;
    color: white;
  }
`;
const SrcBox = styled.div`
  width: 12vw;
  background-color: white;
  border-radius: 15px;
  display: flex;
  align-items: center;
`;
const SearchInput = styled.input`
  color: #072a5f;
  border:none;
  font-size: 0.8rem;
  margin-left: 10%;
  width: 85%;

  &:focus {
    outline: none;
    color: black;
  }
`;

const handleSrc = () => {
  //props 넘기기(두글자 이상일때만)

}

const Navbar = () => {
  const [srcContent, setSrcContent] = useState('');
  const updateSearchBox = e => setSrcContent(e.target.value);

  const Srcbox = useRef();

  const handleSrc = () => {
    //두 글자 이상일때만 props 던지기
    const props = Srcbox.current.value;
    if(props.length < 2){
      alert("두 글자 이상을 입력해주세요")
    } else{
      
    }
    console.log(props)
  }

  return (
    <div style={{ position: "fixed", zIndex: "111"}}>
      <img src={header} style={{ width: "100vw" }}></img>
      <MenuArea>
        <a href="/">홈</a>
        <a href="/subjectList">과목검색</a>
        <SrcBox>
          <SearchInput
            contentEditable="true"
            placeholder="과목명으로 검색하기"
            maxLength="10"

            value={srcContent}
            onChange={updateSearchBox}

            ref={Srcbox}
          ></SearchInput>
          <FaSistrix style={{ marginRight: "10px", color:"#072A5F" }}
          
          onClick={handleSrc}
          />
        </SrcBox>
      </MenuArea>
    </div>
  );
};

export default Navbar;
