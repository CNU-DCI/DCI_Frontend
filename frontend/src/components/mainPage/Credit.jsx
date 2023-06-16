import styled from "@emotion/styled";
import { Icons } from "constants/layout";
import { Layout60vw } from "constants/layout";
import { MainContainer } from "constants/layout";
import { ReactComponent as Computer } from "img/Computer.svg";
import kitty from "img/kitty.jpg";
import bunny from "img/bunny.jpg";
import puppy from "img/puppy.jpg";
import 소영_Credit from 'img/소영_Credit.jpg'
import 효진_Credit from 'img/효진_Credit.png'
import 현준_Credit from 'img/현준_Credit.jpg'
import 용태_Credit from 'img/용태_Credit.jpg'
import 윤선_Credit from 'img/윤선_Credit.jpg'

const MemberContainer = styled.div`
  display: flex;
  text-align: left;
  align-items: center;
  margin-bottom: 70px;

  &:nth-child(2n) {
    justify-content: flex-end;
    text-align: right;
  }
`;

const IMG = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  over-flow: hidden;
  box-shadow: 0 0 15px 10px #CDCDCD;
  margin: 0 30px;
  object-fit: contain;
`;

const TextBox = styled.div`
  h4 {
    opacity: 0.6;
  }

  h2 {
    margin-bottom: 20px;
    margin-left: -5px;
    margin-right: -5px;
  }
`;
const Credit = () => {
  return (
    <Layout60vw>
      <Icons>
        <Computer />
      </Icons>
      <h2>Credit</h2>
      <MainContainer>
        <MemberContainer>
          <IMG src={소영_Credit}></IMG>
          <TextBox>
            <h4>Frontend</h4>
            <h2>🐱전소영🐱</h2>
            <p>
              공공데이터 API를 활용하여 기획부터 경쟁률 산정, 구현, 배포까지 <br/>
              전 과정에 참여 할 수 있어 의미있었던 프로젝트 같습니다! <br/>
              쉽지만은 않은 여정이었는데 매주 열정적으로 아이디어내고 회의하느라 다들 수고하셨어요💙
            </p>
          </TextBox>
        </MemberContainer>
        <MemberContainer>
          <TextBox>
            <h4>Frontend</h4>
            <h2>🐱안효진🐱</h2>
            <p>
            공공데이터를 활용하여 프로젝트를 진행한다는 점에서 뜻깊었던 것 같습니다. <br/> 
            수강신청을 직접 하는 입장에서 불편했던 점을 생각해보고, 그 아이디어를 직접 구현해보며 <br/> 
            개발에 더욱 몰입할 수 있었다고 생각합니다.
            </p>
          </TextBox>
          <IMG src={효진_Credit}></IMG>
        </MemberContainer>
        <MemberContainer>
          <IMG src={현준_Credit}></IMG>
          <TextBox>
            <h4>Backend</h4>
            <h2>🐱권현준🐱</h2>
            <p>
            프로젝트에서 공공데이터를 이용해 처음 개발해보았는데 좋은 경험이었습니다. <br/> 
            많은 우여곡절이 있었지만 다 좋은 경험이었습니다. 감사합니다.
            </p>
          </TextBox>
        </MemberContainer>
        <MemberContainer>
          <TextBox>
            <h4>Backend</h4>
            <h2>🐱최용태🐱</h2>
            <p>
            좋은 경험이었고 다들 고생 하셨습니당
            </p>
          </TextBox>
          <IMG src={용태_Credit}></IMG>
        </MemberContainer>
        <MemberContainer>
          <IMG src={윤선_Credit}></IMG>
          <TextBox>
            <h4>Special Thanks to</h4>
            <h2>🐱조윤선🐱</h2>
            <p>
            프로젝트 디자인에 도움을 줬습니다!
            좋은 프로젝트에 기여할 수 있어서 좋은 경험이였습니다. <br/> 
            실제로도 이런 사이트가 있으면 좋겠네요.( ´∀｀ )b
            </p>
          </TextBox>
        </MemberContainer>
      </MainContainer>
    </Layout60vw>
  );
};

export default Credit;
