/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CustomerRegister
// ====================================================

export interface CustomerRegister_customerCreate_customer {
  __typename: 'Customer';
  /**
   * A unique ID for the customer.
   */
  id: string;
  /**
   * The customer’s first name.
   */
  firstName: string | null;
  /**
   * The customer’s last name.
   */
  lastName: string | null;
  /**
   * The customer’s email address.
   */
  email: string | null;
}

export interface CustomerRegister_customerCreate_customerUserErrors {
  __typename: 'CustomerUserError';
  /**
   * The error message.
   */
  message: string;
}

export interface CustomerRegister_customerCreate {
  __typename: 'CustomerCreatePayload';
  /**
   * The created customer object.
   */
  customer: CustomerRegister_customerCreate_customer | null;
  /**
   * The list of errors that occurred from executing the mutation.
   */
  customerUserErrors: CustomerRegister_customerCreate_customerUserErrors[];
}

export interface CustomerRegister_customerAccessTokenCreate_customerAccessToken {
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

export interface CustomerRegister_customerAccessTokenCreate {
  __typename: 'CustomerAccessTokenCreatePayload';
  /**
   * The newly created customer access token object.
   */
  customerAccessToken: CustomerRegister_customerAccessTokenCreate_customerAccessToken | null;
}

export interface CustomerRegister {
  /**
   * Creates a new customer.
   */
  customerCreate: CustomerRegister_customerCreate | null;
  /**
   * Creates a customer access token.
   * The customer access token is required to modify the customer object in any way.
   */
  customerAccessTokenCreate: CustomerRegister_customerAccessTokenCreate | null;
}

export interface CustomerRegisterVariables {
  email: string;
  password: string;
  firstName?: string | null;
  lastName?: string | null;
}
