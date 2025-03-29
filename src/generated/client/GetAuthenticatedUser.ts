/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAuthenticatedUser
// ====================================================

export interface GetAuthenticatedUser_authenticatedUser {
  __typename: 'AuthenticatedUser';
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  expiresAt: string;
}

export interface GetAuthenticatedUser {
  authenticatedUser: GetAuthenticatedUser_authenticatedUser;
}
