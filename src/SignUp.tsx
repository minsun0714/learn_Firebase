import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./service/firebase";

const SignUpInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: -90px;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 23vh;
  margin-bottom: -20vh;
`;

const SignUpInput = styled.input`
  margin-top: 2vh;
  padding: 2px 10px;
  height: 30px;
  width: 200px;
  border-radius: 5px;
  background-color: lightgray;
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
  background-color: black;
  border: none;
  color: white;
  border-radius: 10px;
  width: 370px;

  height: 6vh;
  margin: 5px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

function SignUp() {
  const [signUpEmail, setEmail] = useState("");
  const [signUpPassword, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        signUpEmail,
        signUpPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SignUpInputWrapper>
        <SignUpForm>
          <SignUpInput
            placeholder='email'
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <SignUpInput
            placeholder='비밀번호'
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </SignUpForm>
      </SignUpInputWrapper>
      <BtnWrapper>
        <Link
          to={{
            pathname: `/mypage`,
          }}
        >
          <Btn onClick={handleRegister}>Create User</Btn>
        </Link>
        <Link
          to={{
            pathname: `/`,
          }}
        >
          <Btn>Back</Btn>
        </Link>
      </BtnWrapper>
    </>
  );
}

export default SignUp;
