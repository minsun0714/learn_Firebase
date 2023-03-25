import styled from "styled-components";
import { collection, getDocs, doc, QuerySnapshot } from "firebase/firestore";
import { db } from "./service/firebase";

const Title = styled.h1`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

const MemoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MemoTextarea = styled.textarea`
  margin: 30px;
  background-color: aliceblue;
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.button`
  border: none;
  background-color: gray;
  color: white;
  border-radius: 5px;
  margin: 20px;
  height: 45px;
  width: 90px;
`;

const MemoListBtn = styled.button`
  border: none;
  background-color: violet;
  color: white;
  border-radius: 5px;
  margin: 20px;
  height: 45px;
  width: 220px;
`;

function Memo() {
  console.log(db);
  async function handleGetMemo() {
    let querySnapshot = await getDocs(collection(db, "learn_firebase"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  }
  return (
    <MemoContainer>
      <Title>메모장</Title>
      <MemoTextarea></MemoTextarea>
      <BtnContainer>
        <Btn>save</Btn>
        <Btn>delete</Btn>
      </BtnContainer>
      <MemoListBtn onClick={handleGetMemo}>나의 메모 보기</MemoListBtn>
      {}
    </MemoContainer>
  );
}
export default Memo;
