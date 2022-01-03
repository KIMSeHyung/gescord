import React from "react";
import styled, { css, keyframes } from "../../styles/themed-components";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import { ContextMenu, ContextMenuTrigger, MenuItem } from "react-contextmenu";
import { useReactiveVar } from "@apollo/client";
import { currentUserVar } from "../../store/users.state";

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

const CustomContextMenu = styled(ContextMenu)`
  position: fixed;
  width: 200px;
  left: 0;
  top: calc(100% + 10px);
  border-radius: 4px;
  background-color: ${(props) => props.theme.color.baseBlack};
  padding: 10px;
  z-index: 99;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

  .invite {
    color: ${(p) => p.theme.color.blurple};
    :hover {
      background: ${(props) => props.theme.color.blurple};
      color: white;
    }
  }

  .away {
    color: #e71919;
    :hover {
      background: #e71919;
      color: white;
    }
  }
`;

const CustomMenuItem = styled(MenuItem)`
  font-size: 14px;
  display: block;
  text-decoration: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;
  position: relative;
  margin-bottom: 2px;
  font-weight: 500;
  display: flex;
  align-items: center;
  outline: none;
`;

const Hr = styled.hr`
  border: 0;
  border-top: 1px solid ${(p) => p.theme.color.greyDiv};
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
  master: number;
  icon?: SvgIconProps | string;
  title?: string;
};

const ChannelIcon: React.FC<IChannelIcon> = ({
  id,
  master,
  icon,
  title,
  activeChannel,
  activeHandler,
}) => {
  const currentUser = useReactiveVar(currentUserVar);

  return (
    <>
      <ContextMenuTrigger id={`contextmenu${id}`}>
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
      </ContextMenuTrigger>
      {id !== -1 && (
        <CustomContextMenu id={`contextmenu${id}`}>
          <CustomMenuItem className="invite" onClick={() => {}}>
            <span>초대하기</span>
          </CustomMenuItem>

          {currentUser?.id !== master && (
            <>
              <Hr />
              <CustomMenuItem className="away">
                <span>서버나가기</span>
              </CustomMenuItem>
            </>
          )}
        </CustomContextMenu>
      )}
    </>
  );
};

export default ChannelIcon;
