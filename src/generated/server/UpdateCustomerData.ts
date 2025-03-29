/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateCustomerData
// ====================================================

export interface UpdateCustomerData_customerUpdate_customer {
  __typename: 'Customer';
  /**
   * A unique ID for the customer.
   */
  id: string;
  /**
   * The customer’s email address.
   */
  email: string | null;
  /**
   * The customer’s first name.
   */
  firstName: string | null;
  /**
   * The customer’s last name.
   */
  lastName: string | null;
}

export interface UpdateCustomerData_customerUpdate {
  __typename: 'CustomerUpdatePayload';
  /**
   * The updated customer object.
   */
  customer: UpdateCustomerData_customerUpdate_customer | null;
}

export interface UpdateCustomerData {
  /**
   * Updates an existing customer.
   */
  customerUpdate: UpdateCustomerData_customerUpdate | null;
}

export interface UpdateCustomerDataVariables {
  customerAccessToken: string;
  password?: string | null;
  lastName: string;
  firstName: string;
  email: string;
}
