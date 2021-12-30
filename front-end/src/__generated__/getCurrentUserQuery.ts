/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getCurrentUserQuery
// ====================================================

export interface getCurrentUserQuery_currentUser_user {
  __typename: "User";
  email: string;
  name: string;
  tag: string;
}

export interface getCurrentUserQuery_currentUser {
  __typename: "CurrentUserResponse";
  ok: boolean;
  message: string | null;
  user: getCurrentUserQuery_currentUser_user | null;
}

export interface getCurrentUserQuery {
  /**
   * 로그인된 유저 정보
   */
  currentUser: getCurrentUserQuery_currentUser;
}
