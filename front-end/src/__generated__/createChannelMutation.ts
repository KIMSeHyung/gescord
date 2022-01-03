/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createChannelMutation
// ====================================================

export interface createChannelMutation_createChannel_channel_master {
  __typename: "User";
  id: number;
}

export interface createChannelMutation_createChannel_channel {
  __typename: "JoinChannel";
  id: number;
  name: string;
  master: createChannelMutation_createChannel_channel_master;
}

export interface createChannelMutation_createChannel {
  __typename: "CreateChannelResponse";
  ok: boolean;
  message: string | null;
  channel: createChannelMutation_createChannel_channel | null;
}

export interface createChannelMutation {
  /**
   * 채널 생성
   */
  createChannel: createChannelMutation_createChannel;
}

export interface createChannelMutationVariables {
  name: string;
}
