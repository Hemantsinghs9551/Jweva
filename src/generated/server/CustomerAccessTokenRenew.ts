/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CustomerAccessTokenRenew
// ====================================================

export interface CustomerAccessTokenRenew_customerAccessTokenRenew_customerAccessToken {
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

export interface CustomerAccessTokenRenew_customerAccessTokenRenew {
  __typename: 'CustomerAccessTokenRenewPayload';
  /**
   * The renewed customer access token object.
   */
  customerAccessToken: CustomerAccessTokenRenew_customerAccessTokenRenew_customerAccessToken | null;
}

export interface CustomerAccessTokenRenew {
  /**
   * Renews a customer access token.
   *
   * Access token renewal must happen *before* a token expires.
   * If a token has already expired, a new one should be created instead via `customerAccessTokenCreate`.
   */
  customerAccessTokenRenew: CustomerAccessTokenRenew_customerAccessTokenRenew | null;
}

export interface CustomerAccessTokenRenewVariables {
  customerAccessToken: string;
}
