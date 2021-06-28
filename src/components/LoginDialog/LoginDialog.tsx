import React, { FC, useState } from "react";
import { EMAIL_EXP } from "../../constants/patterns";
import { isLoggedInVar } from "../../store/users.state";
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

const JoinWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

type ILoginDialog = {
  joinHandler: (state: boolean) => void;
};

const LoginDialog: FC<ILoginDialog> = ({ joinHandler }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const loginHandler = () => {
    if (!email.match(EMAIL_EXP) || password.length < 6) {
      return;
    }
    isLoggedInVar(true);
  };

  return (
    <Container>
      <TitleLabel>괴스코드에 오신걸 환영합니다!</TitleLabel>
      <Label>이메일</Label>
      <Input
        type="email"
        style={{ marginTop: "10px" }}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Label>비밀번호</Label>
      <Input
        type="password"
        style={{ marginTop: "10px" }}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            loginHandler();
          }
        }}
      />
      <BlueLabel style={{ marginTop: "5px" }}>비밀번호를 잊으셨나요?</BlueLabel>
      <ActionButton
        onClick={() => {
          loginHandler();
        }}
      >
        로그인
      </ActionButton>
      <JoinWrapper>
        <Label>계정이 필요한가요?</Label>
        <BlueLabel
          style={{ marginTop: "25px", marginLeft: "5px" }}
          onClick={() => {
            joinHandler(true);
          }}
        >
          가입하기
        </BlueLabel>
      </JoinWrapper>
    </Container>
  );
};

export default LoginDialog;
