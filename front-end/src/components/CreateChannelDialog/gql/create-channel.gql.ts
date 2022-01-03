import { gql } from "@apollo/client";

export const CREATE_CHANNEL_MUTATION = gql`
  mutation createChannelMutation($name: String!) {
    createChannel(channelName: $name) {
      ok
      message
      channel {
        id
        name
      }
    }
  }
`;
