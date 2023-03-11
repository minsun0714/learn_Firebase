import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  browserSessionPersistence,
  signOut,
} from "firebase/auth";
import auth from "./service/firebase";

const LoginInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: -90px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 23vh;
  margin-bottom: -20vh;
`;

const LoginInput = styled.input`
  margin-top: 2vh;
  padding: 2px 10px;
  height: 30px;
  width: 200px;
  border-radius: 5px;
  background-color: lightblue;
  border: none;
  box-shadow: 1px 1px 1px gray;
`;

const BtnWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.button`
  background-color: blue;
  border: none;
  color: white;
  border-radius: 25px;
  width: 300px;
  height: 6vh;
  margin: 5px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

function App() {
  const history = useHistory();
  const [userData, setUserData] = useState(null) as any;
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    setPersistence(auth, browserSessionPersistence).then(() => {
      signInWithPopup(auth, provider)
        .then((result) => {
          setUserData(result.user);
          console.log(result);
          const name = result.user.displayName;
          history.push("/mypage");
          console.log(name);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <>
      <LoginInputWrapper>
        <LoginForm>
          <LoginInput placeholder='id' />
          <LoginInput placeholder='password' />
        </LoginForm>
      </LoginInputWrapper>
      <BtnWrapper className='App'>
        {userData ? `${userData.displayName}님 환영합니다~` : null}

        <Link
          to={{
            pathname: `/mypage`,
          }}
        >
          <Btn>Email Login</Btn>
        </Link>

        <Link
          to={{
            pathname: `/sign-up`,
          }}
        >
          <Btn>Sign-up</Btn>
        </Link>
        <Btn onClick={handleGoogleLogin}>Google Login</Btn>
      </BtnWrapper>
    </>
  );
}

export default App;
