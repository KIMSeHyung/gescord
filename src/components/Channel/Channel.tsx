import React from "react";
import styled from "../../styles/themed-components";
import { ChannelsLeftTop } from "./styles";

const LeftPannel = styled.div`
  width: 18%;
  background-color: ${({ theme }) => theme.color.dark};
  border-top-left-radius: 15px;
`;

const MiddlePannel = styled.div`
  width: 65%;
  background-color: ${({ theme }) => theme.color.chat};
`;

const RightPannel = styled.div`
  width: 17%;
  background-color: ${({ theme }) => theme.color.dark};
`;

type IChannel = {
  tabId: number;
};

const Channel: React.FC<IChannel> = ({ tabId }) => {
  return (
    <>
      <LeftPannel>
        <ChannelsLeftTop>테스트</ChannelsLeftTop>
      </LeftPannel>
      <MiddlePannel>
        <div>채팅</div>
      </MiddlePannel>
      <RightPannel>유저</RightPannel>
    </>
  );
};

export default Channel;
