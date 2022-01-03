/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getJoinChannelsQuery
// ====================================================

export interface getJoinChannelsQuery_getJoinChannels_channels_master {
  __typename: "User";
  id: number;
}

export interface getJoinChannelsQuery_getJoinChannels_channels {
  __typename: "JoinChannel";
  id: number;
  name: string;
  master: getJoinChannelsQuery_getJoinChannels_channels_master;
}

export interface getJoinChannelsQuery_getJoinChannels {
  __typename: "GetJoinChannelsResponse";
  ok: boolean;
  message: string | null;
  channels: getJoinChannelsQuery_getJoinChannels_channels[] | null;
}

export interface getJoinChannelsQuery {
  /**
   * 참여하고 있는 채널 목록
   */
  getJoinChannels: getJoinChannelsQuery_getJoinChannels;
}
