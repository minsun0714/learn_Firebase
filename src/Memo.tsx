import { useState } from "react";
import styled from "styled-components";
import {
  collection,
  getDocs,
  addDoc,
  DocumentReference,
  DocumentData,
  deleteDoc,
} from "firebase/firestore";
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

const MemoWrapper = styled.div`
  display: flex;
  margin: 5px;
`;

const DeleteBtn = styled.button`
  background-color: gray;
  border-radius: 7px;
  color: white;
  margin-top: -3px;
  margin-left: auto;
`;

interface IMemo {
  id: string;
  value: string;
  docRef: DocumentReference<DocumentData>;
}

function Memo() {
  const [memos, setMemos] = useState<IMemo[]>([]);
  const [newMemo, setNewMemo] = useState("");

  const handleGetMemo = async () => {
    let querySnapshot = await getDocs(collection(db, "learn_firebase"));
    const memoList: IMemo[] = [];
    querySnapshot.docs.forEach((doc) => {
      for (let key in doc.data()) {
        memoList.push({ id: key, value: doc.data()[key], docRef: doc.ref });
      }
    });
    setMemos(memoList);
  };

  const handleSaveMemo = async () => {
    if (newMemo === "") return;
    const docRef = await addDoc(collection(db, "learn_firebase"), {
      memo: newMemo,
    });
    console.log(docRef.id);
    setNewMemo("");
  };
  const handleDeleteMemo = async (docRef: DocumentReference<DocumentData>) => {
    await deleteDoc(docRef);
    setMemos(memos.filter((memo) => memo.docRef !== docRef));
  };
  return (
    <MemoContainer>
      <Title>메모장</Title>
      <MemoTextarea
        value={newMemo}
        onChange={(event) => {
          console.log(event.target.value);
          setNewMemo(event.target.value as any);
        }}
      ></MemoTextarea>
      <BtnContainer>
        <Btn onClick={handleSaveMemo}>save</Btn>
      </BtnContainer>
      <MemoListBtn onClick={handleGetMemo}>나의 메모 보기</MemoListBtn>
      <ul>
        {memos.map((memo) => {
          return (
            <MemoWrapper key={memo.id}>
              <li>{memo.value}</li>
              <DeleteBtn onClick={() => handleDeleteMemo(memo.docRef)}>
                X
              </DeleteBtn>
            </MemoWrapper>
          );
        })}
      </ul>
    </MemoContainer>
  );
}
export default Memo;
