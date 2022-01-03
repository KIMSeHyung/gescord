import React from "react";
import styled, { css, keyframes } from "../../styles/themed-components";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

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
            background-color: ${({ theme }) => theme.color.blurple};
          }
        `
      : css`
          :hover {
            .bar {
              animation: ${barHoverAnim} 0.3s forwards;
            }
            .icon {
              border-radius: 40%;
              background-color: ${({ theme }) => theme.color.blurple};
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
  font-size: 1em;
  font-weight: 600;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  transition: 0.2s;
`;

type IChannelIcon = {
  activeHandler: (id: number) => void;
  activeChannel: number;
  id: number;
  icon?: SvgIconProps | string;
  title?: string;
};

const ChannelIcon: React.FC<IChannelIcon> = ({
  id,
  icon,
  title,
  activeChannel,
  activeHandler,
}) => {
  return (
    <Container active={id === activeChannel}>
      <SelectBar className="bar" />
      <Icon
        className="icon"
        onClick={() => {
          activeHandler(id);
        }}
      >
        {icon}
        {title}
      </Icon>
    </Container>
  );
};

export default ChannelIcon;
