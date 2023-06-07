import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import {Icons} from 'constants/layout';
import {Layout60vw} from 'constants/layout';
import {MainContainer} from 'constants/layout';
import { ReactComponent as Award } from "img/Award.svg";


const mostCompetition_dummy = {
  high: [
    {
      id: 1,
      name: "인간관계론"
    },
    {
      id: 2,
      name: "공학도를 위한 세계문화"
    },
    {
      id: 3,
      name: "석유화학공학"
    },
    {
      id: 4,
      name: "경영통계학"
    },
    {
      id: 5,
      name: "수의영상의학실습 1"
    },
    {
      id: 6,
      name: "식물자원학과"
    },
    {
      id: 7,
      name: "인간관계론"
    },
    {
      id: 8,
      name: "경영학개론"
    },
    {
      id: 9,
      name: "음악의 이해"
    },
    {
      id: 10,
      name: "산림정책학"
    },
    {
      id: 11,
      name: "자료구조"
    },
    {
      id: 12,
      name: "정보검색"
    },
    {
      id: 13,
      name: "수리물리 1"
    },
    {
      id: 14,
      name: "외국어로서의 한국어교육"
    },
    {
      id: 15,
      name: "인간과 복지"
    }
  ],
  low: [
    {
      id: 1,
      name: "피아노교수법 1"
    },
    {
      id: 2,
      name: "현대인의 생활문화"
    },
    {
      id: 3,
      name: "소비자와 마케팅"
    },
    {
      id: 4,
      name: "간호이론분석"
    },
    {
      id: 5,
      name: "국어학개론"
    },
    {
      id: 6,
      name: "신재생에너지공학"
    },
    {
      id: 7,
      name: "과학적표현을 위한 3Ds MAX 모델링"
    },
    {
      id: 8,
      name: "논리와비판적사고"
    },
    {
      id: 9,
      name: "연구윤리"
    },
    {
      id: 10,
      name: "미생물생태학특론"
    },
    {
      id: 11,
      name: "바이오센서공학특론"
    },
    {
      id: 12,
      name: "바이오-AI 융합 인턴쉽"
    },
    {
      id: 13,
      name: "AI를 위한 기초 프로그래밍"
    },
    {
      id: 14,
      name: "약학이론실습Ⅳ"
    },
    {
      id: 15,
      name: "소비자와시장"
    }
  ],
}

console.log(mostCompetition_dummy.high);

const CompetitionContainer = styled.div`
  display: flex;
  justify-content: space-between;

  div{
    width: 48%;
    height: 100%;
    background: white;
    font-weight: bold;
  }
`

const HighCompetition = styled.div`
  border: 2px solid #FFD4D4;
`
const LowCompetition = styled.div`
  border: 2px solid #78AEFF;
`
const CompetitionUl = styled.ul`
  li:last-child{
    border: 0;
  }
`
const CompetitionLi = styled.li`
  border-bottom: 1px solid black;
  padding: 10px;

`
const MostCompetition = () => {
  const [mostCompetition, setdata] = useState(mostCompetition_dummy);

  console.log(mostCompetition.high[0].id)
  return(
    <Layout60vw style={{backgroundColor: "yellow"}}>
      <Icons>
        <Award />
      </Icons>
      <h2>최근 3년간 경쟁률 추이</h2>
      <h5 style={{color: "#616161"}}>2023.05.27. 16:00시 기준</h5>

      <MainContainer>
        <CompetitionContainer>
          <HighCompetition>
            <h3>🔥경쟁률 가장 높은 과목🔥</h3>
            <ul>
              {
                mostCompetition.high.map((most, idx) => (
                  <CompetitionLi>{most.name}</CompetitionLi>
                ))
              }
              {/* 
              {
                mostCompetition.high.map((id, name) => (
                  <CompetitionLi>{name}</CompetitionLi>
                ))
              }
               */}
            </ul>
          </HighCompetition>
          <LowCompetition>
            <h3>💧경쟁률 가장 낮은 과목💧</h3>
            <ul>
              {
                mostCompetition.low.map((most, idx) => (
                  <CompetitionLi>{most.name}</CompetitionLi>
                ))
              }
            </ul>
          </LowCompetition>
        </CompetitionContainer>
      </MainContainer>
    </Layout60vw>
  );
}

export default MostCompetition;