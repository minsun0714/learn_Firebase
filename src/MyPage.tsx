import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { signOut, deleteUser } from "firebase/auth";
import auth from "./service/firebase";

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
  const history = useHistory();
  const handleGoogleLogout = () => {
    signOut(auth)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleWithdraw = () => {
    const user = auth.currentUser;
    deleteUser(user as any).then(() => {
      console.log("계정이 삭제되었습니당");
    });
  };
  return (
    <>
      <BtnWrapper className='MyPage'>
        <Btn onClick={handleGoogleLogout}>Log-Out</Btn>
        <Link
          to={{
            pathname: `/`,
          }}
        >
          <Btn onClick={handleWithdraw}>withdraw</Btn>
        </Link>
      </BtnWrapper>
    </>
  );
}

export default MyPage;
