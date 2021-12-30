/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { activeStatus } from "./globalTypes";

// ====================================================
// GraphQL query operation: getFriendsQuery
// ====================================================

export interface getFriendsQuery_getFriends_friends {
  __typename: "User";
  id: number;
  name: string;
  tag: string;
  isActive: activeStatus | null;
}

export interface getFriendsQuery_getFriends {
  __typename: "GetFriendsResponse";
  ok: boolean;
  message: string | null;
  friends: getFriendsQuery_getFriends_friends[] | null;
}

export interface getFriendsQuery {
  /**
   * 친구 목록 조회
   */
  getFriends: getFriendsQuery_getFriends;
}
