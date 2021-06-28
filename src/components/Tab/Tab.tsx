import React from "react";
import ChannelIcon from "../common/ChannelIcon";

import HomeIcon from "@material-ui/icons/Home";
import styled from "../../styles/themed-components";
import AddServer from "../common/AddServer";

const Divider = styled.div`
  width: 40px;
  height: 2px;
  background-color: ${({ theme }) => theme.color.chat};
  margin: 5px auto;
`;

type ITab = {
  curTab: number;
  tabHandler: (id: number) => void;
  isAdd: boolean;
  isAddHandler: (state: boolean) => void;
};

const Tab: React.FC<ITab> = ({ curTab, tabHandler, isAdd, isAddHandler }) => {
  const channels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <>
      <ChannelIcon
        icon={<HomeIcon style={{ color: "white", fontSize: "40px" }} />}
        id={-1}
        activeChannel={curTab}
        activeHandler={tabHandler}
      />
      <Divider />
      {channels.map((x, i) => (
        <ChannelIcon
          key={x}
          id={x}
          title="테스트"
          activeChannel={curTab}
          activeHandler={tabHandler}
        />
      ))}
      <AddServer active={isAdd} activeHandler={isAddHandler} />
    </>
  );
};

export default Tab;
