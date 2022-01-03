/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateUserActiveStatus
// ====================================================

export interface updateUserActiveStatus_updateUserActiveStatus {
  __typename: "BaseResponse";
  ok: boolean;
  message: string | null;
}

export interface updateUserActiveStatus {
  updateUserActiveStatus: updateUserActiveStatus_updateUserActiveStatus;
}

export interface updateUserActiveStatusVariables {
  status: string;
}
