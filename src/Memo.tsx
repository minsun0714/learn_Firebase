import styled from "styled-components";

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

function Memo() {
  return (
    <MemoContainer>
      <Title>메모장</Title>
      <MemoTextarea></MemoTextarea>
      <BtnContainer>
        <Btn>save</Btn>
        <Btn>delete</Btn>
      </BtnContainer>
    </MemoContainer>
  );
}
export default Memo;
