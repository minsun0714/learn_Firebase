import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./service/firebase";
const BtnWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.button`
  background-color: violet;
  border: none;
  color: white;
  border-radius: 15px;
  width: 370px;
  height: 6vh;
  margin: 5px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

function App() {
  const [userData, setUserData] = useState(null) as any;
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUserData(result.user);
        console.log(result);
        const name = result.user.displayName;
        console.log(name);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <BtnWrapper className='App'>
      <Btn onClick={handleGoogleLogin}>Google Login</Btn>
      {userData ? `${userData.displayName}님 환영합니다~` : null}

      {/* <Link
        to={{
          pathname: `/mypage`,
        }}
      >
        <Btn>Email Login</Btn>
      </Link> */}

      {/* <Link
        to={{
          pathname: `/sign-up`,
        }}
      >
        <Btn>Sign-up</Btn>
      </Link> */}
    </BtnWrapper>
  );
}

export default App;
