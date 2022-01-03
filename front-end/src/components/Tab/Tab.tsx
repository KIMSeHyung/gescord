import React from "react";
import ChannelIcon from "../common/ChannelIcon";

import HomeIcon from "@material-ui/icons/Home";
import styled from "../../styles/themed-components";
import AddServer from "../common/AddServer";
import { useQuery, useReactiveVar } from "@apollo/client";
import { curTabVar, userChannelsVar } from "../../store/main.state";
import { getJoinChannelsQuery } from "../../__generated__/getJoinChannelsQuery";
import { GET_JOIN_CHANNELS } from "./gql/tab.gql";

const Divider = styled.div`
  width: 40px;
  height: 2px;
  background-color: ${({ theme }) => theme.color.chat};
  margin: 5px auto;
`;

type ITab = {};

const Tab: React.FC<ITab> = () => {
  const curTab = useReactiveVar(curTabVar);
  const userChannels = useReactiveVar(userChannelsVar);
  const tabHandler = (id: number) => {
    curTabVar(id);
  };
  useQuery<getJoinChannelsQuery>(GET_JOIN_CHANNELS, {
    onCompleted: (data) => {
      const { ok, message, channels } = data.getJoinChannels;
      if (ok) {
        userChannelsVar(channels || []);
      } else {
        console.log(message);
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return (
    <>
      <ChannelIcon
        icon={<HomeIcon style={{ color: "white", fontSize: "40px" }} />}
        id={-1}
        activeChannel={curTab}
        activeHandler={tabHandler}
      />
      <Divider />
      {userChannels?.map((x, i) => (
        <ChannelIcon
          key={i}
          id={x.id}
          title={x.name}
          activeChannel={curTab}
          activeHandler={tabHandler}
        />
      ))}
      <AddServer />
    </>
  );
};

export default Tab;
