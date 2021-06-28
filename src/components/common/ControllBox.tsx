import React from "react";
import User from "./User";
import styled from "styled-components";

//img
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";

const Containner = styled.div`
  width: 100%;
  color: white;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

const SettingBox = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  justify-content: space-around;
`;

const IconBox = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  :hover {
    background-color: #36393faa;
    color: white;
    cursor: pointer;
  }
  color: #a8a8a8;
`;

type IControllBox = {};

const ControllBox: React.FC<IControllBox> = () => {
  return (
    <Containner>
      <User userName={"괴발자"} userState={true} />
      <SettingBox>
        <IconBox>
          <MicIcon style={{ fontSize: "25px" }} />
        </IconBox>
        <IconBox>
          <HeadsetIcon style={{ fontSize: "25px" }} />
        </IconBox>
        <IconBox>
          <SettingsIcon style={{ fontSize: "25px" }} />
        </IconBox>
      </SettingBox>
    </Containner>
  );
};

export default ControllBox;
