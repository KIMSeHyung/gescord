import { gql } from "@apollo/client";

export const GET_FRIENDS_QUERY = gql`
  query getFriendsQuery {
    getFriends {
      ok
      message
      friends {
        id
        name
        tag
        isActive
      }
    }
  }
`;
