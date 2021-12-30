import styled from "../../styles/themed-components";
import { ListHoverBox } from "../common/ListHoverBox";

export const HomesLeftTop = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.color.baseBlack};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const StartBox = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  padding: 5px;
  background-color: ${({ theme }) => theme.color.baseBlack};
  border-radius: 5px;
  color: ${({ theme }) => theme.color.labelGrey};
  :hover {
    cursor: pointer;
  }
`;

export const HomesLeftContents = styled.div`
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
`;

export const HomeLeftListView = styled.div`
  height: 100%;
  display: flex;
  padding: 10px;
  flex-direction: column;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 30px;
    background-color: ${({ theme }) => theme.color.dark};
  }
  :hover {
    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.color.baseBlack};
    }
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.color.dark};
  }
`;

export const FriendListBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FriendButton = styled(ListHoverBox)`
  height: 45px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const FriendLabel = styled.span`
  font-size: 1.1em;
  margin-left: 15px;
`;

export const MessageLabelBox = styled.div`
  height: 40px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  font-size: 0.8em;
  font-weight: 600;
  color: ${({ theme }) => theme.color.labelGrey};
`;

export const MessageLabel = styled.span`
  :hover {
    color: #a8a8a8;
    cursor: pointer;
  }
`;

export const HomeLeftBottomBox = styled.div`
  width: 100%;
  height: 60px;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.color.quiteBlack};
  padding: 10px;
`;
