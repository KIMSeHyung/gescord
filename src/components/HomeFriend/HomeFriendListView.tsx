import React from "react";
import styled from "../../styles/themed-components";
import HomeFriendListItem from "./HomeFriendListItem";

const Container = styled.div`
  height: 100%;
  padding: 10px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
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

  ::-webkit-scrollbar-track {
    background-color: #28292953;
    border-radius: 15px;
  }
`;

const ContentsBox = styled.div`
  margin-top: 10px;
`;

const Label = styled.span`
  margin-left: 10px;
  font-size: 0.8em;
  font-weight: 600;
  color: #a9a9a9;
`;

const HomeFriendListView: React.FC = () => {
  return (
    <Container>
      <Label>{`온라인 - 99명`}</Label>
      <ContentsBox>
        <HomeFriendListItem />
        <HomeFriendListItem />
        <HomeFriendListItem />
        <HomeFriendListItem />
        <HomeFriendListItem />
        <HomeFriendListItem />
        <HomeFriendListItem />
        <HomeFriendListItem />
        <HomeFriendListItem />
        <HomeFriendListItem />
        <HomeFriendListItem />
        <HomeFriendListItem />
        <HomeFriendListItem />
        <HomeFriendListItem />
        <HomeFriendListItem />
      </ContentsBox>
    </Container>
  );
};

export default HomeFriendListView;
