/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RemoveAccessToken
// ====================================================

export interface RemoveAccessToken_customerAccessTokenDelete {
  __typename: 'CustomerAccessTokenDeletePayload';
  /**
   * The destroyed access token.
   */
  deletedAccessToken: string | null;
  /**
   * ID of the destroyed customer access token.
   */
  deletedCustomerAccessTokenId: string | null;
}

export interface RemoveAccessToken {
  /**
   * Permanently destroys a customer access token.
   */
  customerAccessTokenDelete: RemoveAccessToken_customerAccessTokenDelete | null;
}

export interface RemoveAccessTokenVariables {
  customerAccessToken: string;
}
