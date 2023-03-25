import styled from "styled-components";

const Title = styled.h1`
  font-family: Georgia, "Times New Roman", Times, serif;
`;

const MemoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MemoTextarea = styled.textarea`
  margin: 30px;
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
