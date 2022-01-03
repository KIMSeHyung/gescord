/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: joinChannelByCodeMutation
// ====================================================

export interface joinChannelByCodeMutation_joinChannelByCode_channel_master {
  __typename: "User";
  id: number;
}

export interface joinChannelByCodeMutation_joinChannelByCode_channel {
  __typename: "JoinChannel";
  id: number;
  name: string;
  master: joinChannelByCodeMutation_joinChannelByCode_channel_master;
}

export interface joinChannelByCodeMutation_joinChannelByCode {
  __typename: "JoinChannelResponse";
  ok: boolean;
  message: string | null;
  channel: joinChannelByCodeMutation_joinChannelByCode_channel | null;
}

export interface joinChannelByCodeMutation {
  /**
   * 초대코드로 채널 입장
   */
  joinChannelByCode: joinChannelByCodeMutation_joinChannelByCode;
}

export interface joinChannelByCodeMutationVariables {
  code: string;
}
