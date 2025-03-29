/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CustomerCreateToken
// ====================================================

export interface CustomerCreateToken_customerAccessTokenCreate_customerAccessToken {
  __typename: 'CustomerAccessToken';
  /**
   * The customer’s access token.
   */
  accessToken: string;
  /**
   * The date and time when the customer access token expires.
   */
  expiresAt: any;
}

export interface CustomerCreateToken_customerAccessTokenCreate {
  __typename: 'CustomerAccessTokenCreatePayload';
  /**
   * The newly created customer access token object.
   */
  customerAccessToken: CustomerCreateToken_customerAccessTokenCreate_customerAccessToken | null;
}

export interface CustomerCreateToken {
  /**
   * Creates a customer access token.
   * The customer access token is required to modify the customer object in any way.
   */
  customerAccessTokenCreate: CustomerCreateToken_customerAccessTokenCreate | null;
}

export interface CustomerCreateTokenVariables {
  email: string;
  password: string;
}
