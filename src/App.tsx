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
    <BtnWrapper className='App'>
      {userData ? `${userData.displayName}님 환영합니다~` : null}
      <Btn onClick={handleGoogleLogin}>Google Login</Btn>

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
