import React from "react";
import styled, { css } from "../../styles/themed-components";

//img
import DefaultIcon from "../../images/discord-icon.png";

const Container = styled.div`
  height: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  :hover {
    cursor: pointer;
  }
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

const UserName = styled.span`
  font-size: 1.1em;
  margin-left: 15px;
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

type IUser = {
  userImage?: string;
  userName: string;
  userState: boolean;
};
const User: React.FC<IUser> = ({ userImage, userName, userState }) => {
  return (
    <Container>
      <UserImgBox>
        <UserImg src={userImage ? userImage : DefaultIcon} />
        <OnlineOutline>
          <OnlineIcon online={userState} />
        </OnlineOutline>
      </UserImgBox>

      <UserName>{userName}</UserName>
    </Container>
  );
};

export default User;
