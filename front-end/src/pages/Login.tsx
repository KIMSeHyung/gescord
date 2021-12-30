import React, { useState } from "react";
import styled from "styled-components";
import LoginDialog from "../components/LoginDialog";

import ParticlesBg from "particles-bg";
import JoinDialog from "../components/JoinDialog";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login: React.FC = () => {
  const [isJoin, setIsJoin] = useState(false);
  const joinHandler = (state: boolean) => {
    setIsJoin(state);
  };
  return (
    <Container>
      <ParticlesBg type="circle" bg={true} />
      {isJoin ? (
        <JoinDialog joinHandler={joinHandler} />
      ) : (
        <LoginDialog joinHandler={joinHandler} />
      )}
    </Container>
  );
};

export default Login;
