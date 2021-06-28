import React from "react";
import styled from "../../styles/themed-components";
import { Input } from "../common/Input";
import {
  ActionButton,
  BlueLabel,
  Label,
  TitleLabel,
} from "../common/LoginStyle/style";

const Container = styled.div`
  width: 40%;
  ${({ theme }) => theme.media.mobile`
    width: 90%;
  `}
  background-color: ${({ theme }) => theme.color.quiteBlack};
  border-radius: 5px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

type IJoinDialog = {
  joinHandler: (state: boolean) => void;
};

const JoinDialog: React.FC<IJoinDialog> = ({ joinHandler }) => {
  return (
    <Container>
      <TitleLabel>계정 만들기</TitleLabel>

      <Label>이메일</Label>
      <Input type="email" style={{ marginTop: "10px" }} />

      <Label>사용자명</Label>
      <Input type="text" style={{ marginTop: "10px" }} />

      <Label>비밀번호</Label>
      <Input type="password" style={{ marginTop: "10px" }} />

      <ActionButton onClick={() => {}}>계속하기</ActionButton>
      <BlueLabel
        style={{ marginTop: "10px" }}
        onClick={() => {
          joinHandler(false);
        }}
      >
        이미 계정이 있으신가요?
      </BlueLabel>
    </Container>
  );
};

export default JoinDialog;
