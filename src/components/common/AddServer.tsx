import React from "react";
import styled, { css, keyframes } from "../../styles/themed-components";
import AddIcon from "@material-ui/icons/Add";

const barHoverAnim = keyframes`
    from {
        height:0px;
    }
    to{
        height:30px;
    }
`;

const barFocusAnim = keyframes`
    from {
        height:30px;
    }
    to{
        height:60px;
    }
`;

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
          .bar {
            animation: ${barFocusAnim} 0.3s forwards;
          }
          .icon {
            border-radius: 40%;
            background-color: ${({ theme }) => theme.color.online};
            color: white;
          }
        `
      : css`
          :hover {
            .bar {
              animation: ${barHoverAnim} 0.3s forwards;
            }
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
`;

type IAddServer = {
  active: boolean;
  activeHandler: (state: boolean) => void;
};

const AddServer: React.FC<IAddServer> = ({ active, activeHandler }) => {
  return (
    <Container active={active}>
      <SelectBar className="bar" />
      <Icon
        className="icon"
        onClick={() => {
          activeHandler(true);
        }}
      >
        <AddIcon style={{ fontSize: "30px" }} />
      </Icon>
    </Container>
  );
};

export default AddServer;
