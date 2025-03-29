/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { AuthenticatedUserInput } from './globalTypes';

// ====================================================
// GraphQL mutation operation: SetAuthenticatedUser
// ====================================================

export interface SetAuthenticatedUser_setAuthenticatedUser {
  __typename: 'AuthenticatedUser';
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  expiresAt: string;
}

export interface SetAuthenticatedUser {
  setAuthenticatedUser: SetAuthenticatedUser_setAuthenticatedUser;
}

export interface SetAuthenticatedUserVariables {
  user: AuthenticatedUserInput;
}
