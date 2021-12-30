import { useReactiveVar } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { naviTabVar } from "../../store/home-nav.state";
import { friendListVar } from "../../store/users.state";
import styled from "../../styles/themed-components";
import { getFriendsQuery_getFriends_friends } from "../../__generated__/getFriendsQuery";
import { activeStatus } from "../../__generated__/globalTypes";
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
  const friendList = useReactiveVar(friendListVar);
  const curNavTab = useReactiveVar(naviTabVar);
  const [friends, setFriends] = useState<
    getFriendsQuery_getFriends_friends[] | null
  >(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    switch (curNavTab) {
      case 0:
        const onlineFriends: getFriendsQuery_getFriends_friends[] = [];
        let cnt = 0;
        friendList?.forEach((x) => {
          if (x.isActive === activeStatus.ON) {
            cnt++;
            onlineFriends.push(x);
          }
        });
        setCount(cnt);
        setFriends(onlineFriends);
        break;
      case 1:
        setFriends(friendList);
        break;
    }
  }, [curNavTab, friendList]);

  return (
    <Container>
      <Label>{`온라인 - ${count}명`}</Label>
      <ContentsBox>
        {friends?.map((x) => (
          <HomeFriendListItem key={x.id} friend={x} />
        ))}
      </ContentsBox>
    </Container>
  );
};

export default HomeFriendListView;
