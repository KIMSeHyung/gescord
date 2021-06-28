import React from "react";
import styled from "../../styles/themed-components";
import { ListHoverBox } from "../common/ListHoverBox";
import User from "../common/User";

//img
import DeleteIcon from "@material-ui/icons/Close";

const Container = styled(ListHoverBox)`
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-bottom: 3px;
  position: relative;
  :hover {
    .delete {
      display: block;
    }
  }
`;

const DeleteBox = styled.div`
  margin-left: auto;
  display: none;
`;

type IUserListItem = {
  userId: number;
  userName: string;
  userImage?: string;
  curId: number;
  userState: boolean;
  listHandler: (id: number) => void;
};

const UserListItem: React.FC<IUserListItem> = ({
  userId,
  userName,
  userImage,
  userState,
  curId,
  listHandler,
}) => {
  return (
    <Container
      active={userId === curId}
      onClick={() => {
        listHandler(userId);
      }}
    >
      <User userName={userName} userImage={userImage} userState={userState} />
      <DeleteBox className="delete" onClick={() => {}}>
        <DeleteIcon />
      </DeleteBox>
    </Container>
  );
};

export default UserListItem;
