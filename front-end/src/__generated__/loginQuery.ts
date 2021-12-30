/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: loginQuery
// ====================================================

export interface loginQuery_login {
  __typename: "BaseResponse";
  ok: boolean;
  message: string | null;
}

export interface loginQuery {
  /**
   * 로그인 - public
   */
  login: loginQuery_login;
}

export interface loginQueryVariables {
  email: string;
  password: string;
}
