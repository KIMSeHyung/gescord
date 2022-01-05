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
import { useQuery, useReactiveVar } from "@apollo/client";
import { getFriendsQuery } from "../../__generated__/getFriendsQuery";
import { GET_FRIENDS_QUERY } from "./gql/home.gql";
import { activeStatus } from "../../__generated__/globalTypes";
import { friendListVar } from "../../store/users.state";

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
  const friendList = useReactiveVar(friendListVar);
  const rightPannelContent = useMemo(() => {
    switch (curId) {
      case -1:
        return <HomeFriendPannel />;
    }
  }, [curId]);

  const listHandler = (id: number) => {
    setCurId(id);
  };

  useQuery<getFriendsQuery>(GET_FRIENDS_QUERY, {
    onCompleted: (data) => {
      const { ok, message, friends } = data.getFriends;
      if (ok) {
        friendListVar(friends);
      } else {
        console.log(message);
      }
    },
    onError: (error) => {},
  });

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
              <MessageLabel>다이렉트 메세지</MessageLabel>
              <MessageLabel style={{ marginLeft: "auto" }}>
                <AddIcon />
              </MessageLabel>
            </MessageLabelBox>

            <FriendListBox>
              {friendList?.map((x, i) => {
                return (
                  <UserListItem
                    key={i}
                    userId={x.id}
                    userName={x.name}
                    userState={x.isActive === activeStatus.ON ? true : false}
                    curId={curId}
                    listHandler={listHandler}
                  />
                );
              })}
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
