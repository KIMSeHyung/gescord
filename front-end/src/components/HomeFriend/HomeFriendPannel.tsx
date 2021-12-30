import React from "react";
import styled from "../../styles/themed-components";
import HomeActivityView from "./HomeActivityView";
import HomeFriendListView from "./HomeFriendListView";
import HomeFriendNav from "./HomeFriendNav";

const Container = styled.div`
  height: 100%;
`;

const ContentsBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
`;

const FriendListViewBox = styled.div`
  width: 70%;
  padding: 10px;
  margin-bottom: 60px;
`;

const FriendActivityViewBox = styled.div`
  width: 30%;
  border-left: 1px solid ${({ theme }) => theme.color.greyDiv};
  margin-bottom: 60px;
`;

const HomeFriendPannel: React.FC = () => {
  return (
    <Container>
      <HomeFriendNav />
      <ContentsBox>
        <FriendListViewBox>
          <HomeFriendListView />
        </FriendListViewBox>
        <FriendActivityViewBox>
          <HomeActivityView />
        </FriendActivityViewBox>
      </ContentsBox>
    </Container>
  );
};

export default HomeFriendPannel;
