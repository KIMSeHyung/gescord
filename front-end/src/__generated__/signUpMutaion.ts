/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { activeStatus } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: signUpMutaion
// ====================================================

export interface signUpMutaion_signUp_user {
  __typename: "User";
  email: string;
  name: string;
  tag: string;
  isActive: activeStatus | null;
}

export interface signUpMutaion_signUp {
  __typename: "SignUpResponse";
  ok: boolean;
  message: string | null;
  user: signUpMutaion_signUp_user | null;
}

export interface signUpMutaion {
  /**
   * 회원가입 - public
   */
  signUp: signUpMutaion_signUp;
}

export interface signUpMutaionVariables {
  email: string;
  password: string;
  name: string;
}
