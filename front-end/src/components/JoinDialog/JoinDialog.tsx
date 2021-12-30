import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import styled from "../../styles/themed-components";
import {
  signUpMutaion,
  signUpMutaionVariables,
} from "../../__generated__/signUpMutaion";
import { Input } from "../common/Input";
import {
  ActionButton,
  BlueLabel,
  Label,
  TitleLabel,
} from "../common/LoginStyle/style";
import { SINGUP_MUTATION } from "./gql/join.gql";
import { EMAIL_EXP } from "../../constants/patterns";
import spaceBlock from "../../util/space-block";

import Alert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";

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

type IAlerrtState = {
  state: boolean;
  message?: string | null;
};

const JoinDialog: React.FC<IJoinDialog> = ({ joinHandler }) => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isJoinClick, setIsJoinClick] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<IAlerrtState>({
    state: false,
    message: "",
  });
  const [joinMutation] = useMutation<signUpMutaion, signUpMutaionVariables>(
    SINGUP_MUTATION,
    {
      onCompleted: (data) => {
        console.log(data);
        const { ok, message } = data.signUp;
        if (ok) {
          setOpen(true);
          joinHandler(false);
        } else {
          setAlertMessage({ state: true, message: message });
        }
      },
      onError: (error) => {},
    }
  );

  return (
    <Container>
      <TitleLabel>계정 만들기</TitleLabel>
      <Label>이메일</Label>
      <Input
        type="email"
        style={{ marginTop: "10px" }}
        onKeyPress={spaceBlock}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <Label>사용자명</Label>
      <Input
        type="text"
        style={{ marginTop: "10px" }}
        onKeyPress={spaceBlock}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <Label>비밀번호</Label>
      <Input
        type="password"
        style={{ marginTop: "10px" }}
        onKeyPress={spaceBlock}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      {alertMessage.state && (
        <Alert style={{ marginTop: "15px" }} variant="filled" severity="error">
          {alertMessage.message}
        </Alert>
      )}
      <ActionButton
        onClick={() => {
          if (isJoinClick) return;
          if (!email.match(EMAIL_EXP)) {
            setAlertMessage({ state: true, message: "이메일 형식이 아닙니다" });
            return;
          }
          if (name.length < 3) {
            setAlertMessage({
              state: true,
              message: "사용자 명은 3자 이상이어야 합니다",
            });
            return;
          }
          if (password.length < 6) {
            setAlertMessage({
              state: true,
              message: "비밀번호는 6자 이상이어야 합니다",
            });
            return;
          }
          joinMutation({ variables: { email, name, password } });
          setIsJoinClick(true);
          setTimeout(() => {
            setIsJoinClick(false);
          }, 1000);
        }}
      >
        계속하기
      </ActionButton>
      <BlueLabel
        style={{ marginTop: "10px" }}
        onClick={() => {
          joinHandler(false);
        }}
      >
        이미 계정이 있으신가요?
      </BlueLabel>
      <Snackbar
        autoHideDuration={3000}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Alert
          onClose={() => {
            setOpen(false);
          }}
          severity="success"
          variant="filled"
        >
          가입에 성공하셨습니다
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default JoinDialog;
