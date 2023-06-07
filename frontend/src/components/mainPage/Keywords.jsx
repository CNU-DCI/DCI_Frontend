import React, { useEffect, useRef, useState} from "react";
import styled from "@emotion/styled";
import ReactWordcloud from 'react-wordcloud';
import { Icons } from 'constants/layout';
import { Layout60vw } from "constants/layout";
import { MainContainer } from 'constants/layout';
import { ReactComponent as Search } from "img/Search.svg";


const keywords_dummy = [
  {
    text: "인간관계론",
    value: 1
  },
  {
    text: "공학윤리",
    value: 2,
  },
  {
    text: "대학영어1",
    value: 3,
  },
  {
    text: "코딩과 삶",
    value: 4,
  },
  {
    text: "아프리카 사회와 문화",
    value: 5,
  },
  {
    text: "모빌리티",
    value: 6,
  },
  {
    text: "기초한문",
    value: 7,
  },
  {
    text: "AI 활용 표현과 문제해결",
    value: 8,
  },
  {
    text: "기초글쓰기",
    value: 9,
  },
  {
    text: "행정학원론",
    value: 10,
  }
];

const callbacks = {
  getWordColor: word => word.value > 50 ? "blue" : "red",
  onWordClick: console.log,
  onWordMouseOver: console.log,
  getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
}
const options = {
  rotations: 2,
  rotationAngles: [0, 0],
};
const size = [600, 400];


const Keywords = () => {
  const [keywords, setKeyword] = useState(keywords_dummy);

  return(
    <Layout60vw>
      <Icons>
        <Search></Search>
      </Icons>
      <h2>많이 검색된 키워드</h2>
      <h5 style={{color: "#616161"}}>2023.05.27. 16:00시 기준</h5>

      <MainContainer>
        {/* {keywords.map((keyword, idx) => (
            <h1>{keyword.text}</h1>
          ))} */}

          <ReactWordcloud
          callbacks={callbacks}
          options={options}
          size={size}
          words={keywords_dummy}
        />

        
      </MainContainer>
    </Layout60vw>
  );
}

export default Keywords;