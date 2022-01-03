import { gql } from "@apollo/client";

export const GET_JOIN_CHANNELS = gql`
  query getJoinChannelsQuery {
    getJoinChannels {
      ok
      message
      channels {
        id
        name
      }
    }
  }
`;
