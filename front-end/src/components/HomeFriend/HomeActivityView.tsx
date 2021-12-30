import React from "react";
import styled from "../../styles/themed-components";

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 30px;
    background-color: ${({ theme }) => theme.color.dark};
  }
  :hover {
    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.color.baseBlack};
    }
  }
`;

const HomeActivityView: React.FC = () => {
  return <Container></Container>;
};

export default HomeActivityView;
