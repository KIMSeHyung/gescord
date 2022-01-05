import { useReactiveVar } from "@apollo/client";
import React, { useEffect, useMemo, useState } from "react";
import { naviTabVar } from "../../store/home-nav.state";
import { friendListVar } from "../../store/users.state";
import styled from "../../styles/themed-components";
import { getFriendsQuery_getFriends_friends } from "../../__generated__/getFriendsQuery";
import { activeStatus } from "../../__generated__/globalTypes";
import { Input } from "../common/Input";
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

const AddFriendBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const AddFriendTitle = styled.span`
  color: white;
  font-weight: 700;
  font-size: 1.1em;
`;

const AddFriendSub = styled.span`
  color: ${(p) => p.theme.color.labelGrey};
  font-weight: 500;
  font-size: 1em;
  margin-top: 10px;
`;

const AddFirendInput = styled.div`
  height: 60px;
  margin-top: 15px;
  background-color: ${({ theme }) => theme.color.dark};
  border: 1px solid #101010;
  border-radius: 5px;
  color: #aaacaa;
  font-size: 1.2em;
  padding: 10px;
  :hover {
    border: 1px solid black;
    transition: 0.3s;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.color.lightBlue};
  }
`;

const AddFriend: React.FC = () => {
  const [tag, setTag] = useState<string>("");
  return (
    <AddFriendBox>
      <AddFriendTitle>친구 추가하기</AddFriendTitle>
      <AddFriendSub>
        Gedcord Tag를 사용하여 친구를 추가할 수 있어요. 대문자, 소문자를
        구별한답니다!
      </AddFriendSub>
      <AddFirendInput>
        <input type="text" />
      </AddFirendInput>
    </AddFriendBox>
  );
};

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
      case 2:
        setFriends([]);
        break;
      case 3:
        setFriends([]);
        break;
    }
  }, [curNavTab, friendList]);

  const contents = useMemo(() => {
    switch (curNavTab) {
      case 0:
      case 1:
        return (
          <>
            <Label>{`온라인 - ${count}명`}</Label>{" "}
            <ContentsBox>
              {friends?.map((x) => (
                <HomeFriendListItem key={x.id} friend={x} />
              ))}
            </ContentsBox>
          </>
        );
      case 2:
        return <div>친구대기</div>;
      case 3:
        return <Label>{`차단 - ${count}명`}</Label>;
      case 4:
        return <AddFriend />;
    }
  }, [curNavTab, count, friends]);

  return <Container>{contents}</Container>;
};

export default HomeFriendListView;
