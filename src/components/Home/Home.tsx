import React, { useMemo, useState } from "react";
import styled from "../../styles/themed-components";
import {
  FriendButton,
  FriendLabel,
  FriendListBox,
  HomeLeftBottomBox,
  HomeLeftListView,
  HomesLeftContents,
  HomesLeftTop,
  MessageLabel,
  MessageLabelBox,
  StartBox,
} from "./styles";

import UserListItem from "../UserListItem";
import ControllBox from "../common/ControllBox";
import HomeFriendPannel from "../HomeFriend/HomeFriendPannel";

//img
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";

const LeftPannel = styled.div`
  width: 18%;
  background-color: ${({ theme }) => theme.color.dark};
  border-top-left-radius: 15px;
`;

const RightPannel = styled.div`
  width: 82%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.chat};
`;

const Home: React.FC = () => {
  const [curId, setCurId] = useState<number>(-1);
  const rightPannelContent = useMemo(() => {
    switch (curId) {
      case -1:
        return <HomeFriendPannel />;
    }
  }, [curId]);

  const listHandler = (id: number) => {
    setCurId(id);
  };

  const fakeUsers = [
    "괴발자",
    "빠나나우유",
    "건",
    "Jes Lee",
    "superblock",
    "애월댁",
    "최희정",
    "yyt",
    "뺙빧ㅇ",
    "nand",
    "테",
    "스",
    "트",
    "입",
    "니",
    "다",
    "!",
    "2",
    "3",
    "4",
    "5",
    "6",
  ];
  return (
    <>
      <LeftPannel>
        <HomesLeftTop>
          <StartBox onClick={() => {}}>
            <span>대화 찾기 또는 시작하기</span>
          </StartBox>
        </HomesLeftTop>
        <HomesLeftContents>
          <HomeLeftListView>
            <FriendButton
              active={curId === -1}
              onClick={() => {
                setCurId(-1);
              }}
            >
              <PersonIcon style={{ fontSize: "32px" }} />
              <FriendLabel>친구</FriendLabel>
            </FriendButton>

            <MessageLabelBox>
              <MessageLabel>개인 메시지</MessageLabel>
              <MessageLabel style={{ marginLeft: "auto" }}>
                <AddIcon />
              </MessageLabel>
            </MessageLabelBox>

            <FriendListBox>
              {fakeUsers.map((x, i) => (
                <UserListItem
                  key={i}
                  userId={i}
                  userName={x}
                  userState={false}
                  curId={curId}
                  listHandler={listHandler}
                />
              ))}
            </FriendListBox>
          </HomeLeftListView>
          <HomeLeftBottomBox>
            <ControllBox />
          </HomeLeftBottomBox>
        </HomesLeftContents>
      </LeftPannel>

      <RightPannel>{rightPannelContent}</RightPannel>
    </>
  );
};

export default Home;
