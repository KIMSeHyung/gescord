import React from "react";
import styled, { css } from "../../styles/themed-components";

//img
import DefaultIcon from "../../images/discord-icon.png";
import ChatIcon from "@material-ui/icons/ChatBubble";
import MoreIcon from "@material-ui/icons/MoreVert";
import { getFriendsQuery_getFriends_friends } from "../../__generated__/getFriendsQuery";
import { activeStatus } from "../../__generated__/globalTypes";

const Container = styled.div`
  height: 80px;
  border-radius: 10px;
  :hover {
    background-color: ${({ theme }) => theme.color.hover};
    cursor: pointer;
    .icons {
      background-color: ${({ theme }) => theme.color.quiteBlack};
    }
  }
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

const ContentsBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.color.hover};
`;

const UserImgBox = styled.div`
  display: flex;
  position: relative;
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
`;

const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-size: 1.1em;
  font-weight: 600;
  margin-left: 15px;
  color: white;
`;

const UserState = styled.span`
  font-size: 0.9em;
  font-weight: 600;
  margin-left: 15px;
  margin-top: 3px;
  color: #a9a9a9;
`;

const OnlineOutline = styled.div`
  width: 14px;
  height: 14px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  right: 0;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.color.quiteBlack};
`;
const OnlineIcon = styled.div<{ online: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  ${(props) =>
    props.online
      ? css`
          background-color: ${({ theme }) => theme.color.online};
        `
      : css`
          background-color: ${({ theme }) => theme.color.greyDiv};
        `}
`;

const IconBox = styled.div`
  display: inline-flex;
  margin-left: auto;
`;

const Icon = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.labelGrey};
  border-radius: 100%;
  background-color: ${({ theme }) => theme.color.dark};
  margin-left: 10px;
`;

type IHomeFreindListItem = {
  friend: getFriendsQuery_getFriends_friends | null;
};

const HomeFriendListItem: React.FC<IHomeFreindListItem> = ({ friend }) => {
  return (
    <Container>
      <ContentsBox>
        <UserImgBox>
          <UserImg src={DefaultIcon} />
          <OnlineOutline>
            <OnlineIcon online={true} />
          </OnlineOutline>
        </UserImgBox>
        <UserInfoBox>
          <UserName>{friend?.name}</UserName>
          <UserState>
            {friend?.isActive === activeStatus.ON ? "온라인" : "오프라인"}
          </UserState>
        </UserInfoBox>
        <IconBox>
          <Icon className="icons">
            <ChatIcon />
          </Icon>
          <Icon className="icons">
            <MoreIcon />
          </Icon>
        </IconBox>
      </ContentsBox>
    </Container>
  );
};

export default HomeFriendListItem;
