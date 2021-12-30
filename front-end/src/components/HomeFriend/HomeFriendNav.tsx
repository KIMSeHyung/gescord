import React from "react";
import styled, { css } from "../../styles/themed-components";

//img
import PersonIcon from "@material-ui/icons/Person";
import { useReactiveVar } from "@apollo/client";
import { naviTabVar } from "../../store/home-nav.state";

const Container = styled.div`
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.color.chat};
  border-bottom: 1px solid ${({ theme }) => theme.color.quiteBlack};
`;

const FriendLabelBox = styled.div`
  width: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-size: 1.1em;
  color: white;
  margin-left: 20px;
`;

const ItemBox = styled.div<{ active: boolean }>`
  padding: 8px;
  color: #b3b3b3;
  ${({ active, theme }) =>
    active
      ? css`
          background-color: ${({ theme }) => theme.color.hover};
          color: white;
        `
      : null};
  :hover {
    background-color: ${({ theme }) => theme.color.hover};
    color: white;
    cursor: pointer;
  }
  font-size: 1.1em;
  border-radius: 5px;
  margin-left: 20px;
`;

const AddFriendBox = styled.div`
  padding: 8px;
  color: white;
  font-size: 1.1em;
  border-radius: 5px;
  margin-left: 20px;
  background-color: #44aa64;
  :hover {
    cursor: pointer;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 1.4em;
  margin-left: 20px;
  background-color: #535353;
`;

const HomeFriendNav: React.FC = () => {
  const curTab = useReactiveVar(naviTabVar);
  return (
    <Container>
      <FriendLabelBox>
        <PersonIcon style={{ color: "#b3b3b3" }} />
        친구
      </FriendLabelBox>
      <Divider />
      <ItemBox
        active={curTab === 0}
        onClick={() => {
          naviTabVar(0);
        }}
      >
        온라인
      </ItemBox>
      <ItemBox
        active={curTab === 1}
        onClick={() => {
          naviTabVar(1);
        }}
      >
        모두
      </ItemBox>
      <ItemBox
        active={curTab === 2}
        onClick={() => {
          naviTabVar(2);
        }}
      >
        대기중
      </ItemBox>
      <ItemBox
        active={curTab === 3}
        onClick={() => {
          naviTabVar(3);
        }}
      >
        차단목록
      </ItemBox>
      <AddFriendBox>친구 추가하기</AddFriendBox>
    </Container>
  );
};

export default HomeFriendNav;
