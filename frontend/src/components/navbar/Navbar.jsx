import styled from "@emotion/styled";
import { FaSistrix } from "react-icons/fa";
import header from 'img/header.png'

const HeaderSize = styled.div`
  width: 100%;
`;

const Navbar = () => {
  return (
    <>
      <HeaderSize>
        <img src={header}></img>
      </HeaderSize>
    </>
  );
};

export default Navbar;