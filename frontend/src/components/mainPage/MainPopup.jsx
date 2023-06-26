import React, { useState } from 'react';
import { keyframes } from '@emotion/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import sadChacha from 'img/sadChacha.png'
import tigerChacha from 'img/tigerChacha.png'
import { ReactComponent as Cursor } from "img/Cursor.svg";
import { ReactComponent as Cursor2 } from "img/Cursor2.svg";


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const PopupBG = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.85;
  z-index: 1212;
`;

const PopupContainer = styled.div`
  width: 80vw;
  height: 85vh;
  position: fixed;
  opacity: 1;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  animation: ${fadeIn} 0.3s linear;
  z-index: 1313;
`

const PopupContents = styled.div`
  opacity: 1;
  z-index: 2000;
  width: 70%;
  padding: 40px;
  border-radius: 30px;
  margin-left: 12vw;
`

const SadChacaha = styled.div`
  width: 33vw;
  margin-left: auto; 
`

const TigerChacha = styled.div`
  width: 33vw;
  margin-right: auto;
  position: relative;
`
const CloseBtn = styled.button`
  position: absolute;
  width: 230px;
  height: 50px;
  top: 55%;
  left: 64%;
  transform: translate(-50%, -50%);
  border-radius: 30px;
  cursor: pointer;
  transition: 0.5s;
  border: 3px solid #072A5F;
  font-weight: bold;
  font-size: 14px;
  background-color: rgba(255,255,255,0.8);

  &:hover{
    background-color: #072A5F;
    color: white;
  }
`
const CursorContainer = styled.div`
  position: absolute;
  width: 40px;
  top: 66%;
  left: 86%;
  transform: translate(-50%, -50%);
`
const MainPopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    {isOpen && (
      <>
        <PopupBG></PopupBG>
        <PopupContainer>
          <PopupContents>
            <SadChacaha>
              <img src={sadChacha}></img>
            </SadChacaha>
            <TigerChacha>
              <img src={tigerChacha}></img>
              <CloseBtn onClick={togglePopup}>차차와 수강신청 성공하러가기</CloseBtn>
              <CursorContainer>
                <Cursor/>
                {/* <Cursor2/> */}
              </CursorContainer>
            </TigerChacha>
          </PopupContents>
        </PopupContainer>
      </>
        )}
    </>
  );
};

export default MainPopup;
