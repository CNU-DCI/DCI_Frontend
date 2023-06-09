import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import {Icons} from 'constants/layout';
import slide01 from "img/slide01.png";
import {FaShareSquare} from 'react-icons/fa'

const SliderImg = [slide01, slide01, slide01];

const SliderBox = styled.div`
  position: relative;
`

const Slides = styled.div`
  display: flex; 
`
const Slide = styled.div`
  position: relative;
`
const SlideBtn = styled.a`
  width: 15vw;
  height: 3.3vw;
  background-color: transparent;
  color: #072a5f;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #072a5f;
  border-radius: 40px;
  position: absolute;
  left: 11.3%;
  top: 72%;
  font-weight: bold;
  font-size: 16px;
  transition: 0.3s;

  &:hover{
    background-color: #072a5f;
    color: white;
  }

  p{
    margin-right: 8px;
  }
`

const Pagination = styled.div`
  display: flex;
  position: absolute;
  bottom: 4%;
  left: 11.5%;

  div{
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: black;
    margin-right: 10px;
    opacity: 0.4;
  } 
`




const Slider = () => {
  const [location, setLocation] = useState(0);
  const [sliderIdx, setIdx] = useState(0);


  function useInterval(callback, delay) {
    const savedCallback = useRef(); // 최근에 들어온 callback을 저장할 ref를 하나 만든다.
  
    useEffect(() => {
      savedCallback.current = callback; // callback이 바뀔 때마다 ref를 업데이트 해준다.
    }, [callback]);
  
    useEffect(() => {
      function tick() {
        savedCallback.current(); // tick이 실행되면 callback 함수를 실행시킨다.
      }
      if (delay !== null) { // 만약 delay가 null이 아니라면 
        let id = setInterval(tick, delay); // delay에 맞추어 interval을 새로 실행시킨다.
        return () => clearInterval(id); // unmount될 때 clearInterval을 해준다.
      }
    }, [delay]); // delay가 바뀔 때마다 새로 실행된다.
  }

  useInterval(() => {
    setLocation(location - 100);
    setIdx(sliderIdx + 1);

    if(location === -200){
      setLocation(0);
      setIdx(0);
    }
  }, 3500);


  return(
    <>
      <SliderBox>
          <Slides style={{
            transform: `translateX(${location}vw)`,
            transition: "1s ease",
          }}>
            {SliderImg.map((img, idx) =>
              <Slide>
                <img src={slide01} style={{ width: "100vw" }}></img>
                <SlideBtn href="/subjectList">
                  <p>내 과목 경쟁률 알아보기</p>
                  <FaShareSquare style={{fontSize:"25px"}}></FaShareSquare>
                </SlideBtn>
              </Slide>
            )}
          </Slides>
          <Pagination>
            {SliderImg.map((img, idx) =>
                idx == sliderIdx 
                ? <div style={{"opacity": 1}}></div>
                : <div style={{"opacity": 0.2}}></div>
              )}
          </Pagination>
        </SliderBox>
    </>
  );
}

export default Slider;