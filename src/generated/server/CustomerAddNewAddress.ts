/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MailingAddressInput } from './globalTypes';

// ====================================================
// GraphQL mutation operation: CustomerAddNewAddress
// ====================================================

export interface CustomerAddNewAddress_customerAddressCreate_customerAddress {
  __typename: 'MailingAddress';
  /**
   * A globally-unique ID.
   */
  id: string;
  /**
   * The full name of the customer, based on firstName and lastName.
   */
  name: string | null;
  /**
   * The first name of the customer.
   */
  firstName: string | null;
  /**
   * The last name of the customer.
   */
  lastName: string | null;
  /**
   * The first line of the address. Typically the street address or PO Box number.
   */
  address1: string | null;
  /**
   * The second line of the address. Typically the number of the apartment, suite, or unit.
   */
  address2: string | null;
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   */
  phone: string | null;
  /**
   * The name of the country.
   */
  country: string | null;
  /**
   * The name of the city, district, village, or town.
   */
  city: string | null;
  /**
   * The region of the address, such as the province, state, or district.
   */
  province: string | null;
  /**
   * The zip or postal code of the address.
   */
  zip: string | null;
}

export interface CustomerAddNewAddress_customerAddressCreate_customerUserErrors {
  __typename: 'CustomerUserError';
  /**
   * The error message.
   */
  message: string;
}

export interface CustomerAddNewAddress_customerAddressCreate {
  __typename: 'CustomerAddressCreatePayload';
  /**
   * The new customer address object.
   */
  customerAddress: CustomerAddNewAddress_customerAddressCreate_customerAddress | null;
  /**
   * The list of errors that occurred from executing the mutation.
   */
  customerUserErrors: CustomerAddNewAddress_customerAddressCreate_customerUserErrors[];
}

export interface CustomerAddNewAddress {
  /**
   * Creates a new address for a customer.
   */
  customerAddressCreate: CustomerAddNewAddress_customerAddressCreate | null;
}

export interface CustomerAddNewAddressVariables {
  customerAccessToken: string;
  address: MailingAddressInput;
}
