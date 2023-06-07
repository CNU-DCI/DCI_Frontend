import styled from "@emotion/styled";
import {Icons} from 'constants/layout';
import { Layout60vw } from "constants/layout";
import { MainContainer } from "constants/layout";
import { ReactComponent as Computer } from "img/Computer.svg";

const Credit = () => {


  return(
    <Layout60vw>
      <Icons>
        <Computer />
      </Icons>
      <h2>Credit</h2>

      <MainContainer>
        
      </MainContainer>
    </Layout60vw>
  );
}

export default Credit;