/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CustomerAddressDelete
// ====================================================

export interface CustomerAddressDelete_customerAddressDelete_customerUserErrors {
  __typename: 'CustomerUserError';
  /**
   * The error message.
   */
  message: string;
}

export interface CustomerAddressDelete_customerAddressDelete {
  __typename: 'CustomerAddressDeletePayload';
  /**
   * The list of errors that occurred from executing the mutation.
   */
  customerUserErrors: CustomerAddressDelete_customerAddressDelete_customerUserErrors[];
  /**
   * ID of the deleted customer address.
   */
  deletedCustomerAddressId: string | null;
}

export interface CustomerAddressDelete {
  /**
   * Permanently deletes the address of an existing customer.
   */
  customerAddressDelete: CustomerAddressDelete_customerAddressDelete | null;
}

export interface CustomerAddressDeleteVariables {
  id: string;
  customerAccessToken: string;
}
