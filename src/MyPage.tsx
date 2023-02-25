import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BtnWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.button`
  background-color: black;
  border: none;
  color: white;
  border-radius: 10px;
  width: 370px;

  height: 6vh;
  margin: 5px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

function MyPage() {
  return (
    <BtnWrapper className='MyPage'>
      <Link
        to={{
          pathname: `/`,
        }}
      >
        <Btn>Log-Out</Btn>
      </Link>
      <Link
        to={{
          pathname: `/`,
        }}
      >
        <Btn>withdraw</Btn>
      </Link>
    </BtnWrapper>
  );
}

export default MyPage;
