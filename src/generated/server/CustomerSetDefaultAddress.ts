/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CustomerSetDefaultAddress
// ====================================================

export interface CustomerSetDefaultAddress_customerDefaultAddressUpdate_customerUserErrors {
  __typename: 'CustomerUserError';
  /**
   * The error message.
   */
  message: string;
}

export interface CustomerSetDefaultAddress_customerDefaultAddressUpdate {
  __typename: 'CustomerDefaultAddressUpdatePayload';
  /**
   * The list of errors that occurred from executing the mutation.
   */
  customerUserErrors: CustomerSetDefaultAddress_customerDefaultAddressUpdate_customerUserErrors[];
}

export interface CustomerSetDefaultAddress {
  /**
   * Updates the default address of an existing customer.
   */
  customerDefaultAddressUpdate: CustomerSetDefaultAddress_customerDefaultAddressUpdate | null;
}

export interface CustomerSetDefaultAddressVariables {
  customerAccessToken: string;
  addressId: string;
}
