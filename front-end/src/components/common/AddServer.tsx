import React from "react";
import styled, { css } from "../../styles/themed-components";
import AddIcon from "@material-ui/icons/Add";
import { isCreateChannelOpenVar } from "../../store/create-channel.state";
import { useReactiveVar } from "@apollo/client";
import { ContextMenuTrigger } from "react-contextmenu";

const Container = styled.div<{ active: boolean }>`
  width: 100%;
  height: 80px;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  ${(props) =>
    props.active
      ? css`
          .icon {
            border-radius: 40%;
            background-color: ${({ theme }) => theme.color.online};
            color: white;
          }
        `
      : css`
          :hover {
            .icon {
              border-radius: 40%;
              background-color: ${({ theme }) => theme.color.online};
              color: white;
              transition: 0.2s;
            }
            cursor: pointer;
          }
        `}
  :hover {
    cursor: pointer;
  }
`;

const SelectBar = styled.div`
  width: 4px;
  background-color: white;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  position: absolute;
`;

const Icon = styled.div`
  width: 65px;
  height: 65px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.color.chat};
  color: ${({ theme }) => theme.color.online};
  white-space: nowrap;
  overflow: hidden;
  transition: 0.2s;
`;

type IAddServer = {};

const AddServer: React.FC<IAddServer> = () => {
  const isOpen = useReactiveVar(isCreateChannelOpenVar);
  return (
    <ContextMenuTrigger id="contextmenu-add">
      <Container active={isOpen}>
        <SelectBar className="bar" />
        <Icon
          className="icon"
          onClick={() => {
            isCreateChannelOpenVar(true);
          }}
        >
          <AddIcon style={{ fontSize: "30px" }} />
        </Icon>
      </Container>
    </ContextMenuTrigger>
  );
};

export default AddServer;
