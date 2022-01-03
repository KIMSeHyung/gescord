import { gql } from "@apollo/client";

export const CREATE_CHANNEL_MUTATION = gql`
  mutation createChannelMutation($name: String!) {
    createChannel(channelName: $name) {
      ok
      message
      channel {
        id
        name
        master {
          id
        }
      }
    }
  }
`;

export const JOIN_CHANNEL_BY_CODE_MUTATION = gql`
  mutation joinChannelByCodeMutation($code: String!) {
    joinChannelByCode(code: $code) {
      ok
      message
      channel {
        id
        name
        master {
          id
        }
      }
    }
  }
`;
