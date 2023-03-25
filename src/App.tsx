import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./service/firebase";

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
  // email 로그인을 위해 상태변수를 만듦
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});
  const onChangeLoginEmail = (event: any) => {
    console.log(event.target.value);
    setLoginEmail(event.target.value);
  };
  const onChangeLoginPassword = (event: any) => {
    console.log(event.target.value);
    setLoginPassword(event.target.value);
  };

  // 로그인 함수
  const handleEmailLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser as any);
      });
      history.push("/mypage");
    } catch (error) {
      console.log(loginEmail);
    }
  };

  // 구글 로그인
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
          console.log(typeof error.message);
        });
    });
  };

  return (
    <>
      <LoginInputWrapper>
        <LoginForm>
          <LoginInput placeholder='email' onChange={onChangeLoginEmail} />
          <LoginInput placeholder='password' onChange={onChangeLoginPassword} />
        </LoginForm>
      </LoginInputWrapper>
      <BtnWrapper className='App'>
        <Btn onClick={handleEmailLogin}>Email Login</Btn>

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
