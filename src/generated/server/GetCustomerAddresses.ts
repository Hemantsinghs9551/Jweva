/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCustomerAddresses
// ====================================================

export interface GetCustomerAddresses_customer_addresses_pageInfo {
  __typename: 'PageInfo';
  /**
   * Whether there are more pages to fetch following the current page.
   */
  hasNextPage: boolean;
}

export interface GetCustomerAddresses_customer_addresses_edges_node {
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
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   */
  phone: string | null;
  /**
   * The name of the city, district, village, or town.
   */
  city: string | null;
  /**
   * The region of the address, such as the province, state, or district.
   */
  province: string | null;
  /**
   * The first line of the address. Typically the street address or PO Box number.
   */
  address1: string | null;
  /**
   * The second line of the address. Typically the number of the apartment, suite, or unit.
   */
  address2: string | null;
  /**
   * The zip or postal code of the address.
   */
  zip: string | null;
  /**
   * The name of the country.
   */
  country: string | null;
}

export interface GetCustomerAddresses_customer_addresses_edges {
  __typename: 'MailingAddressEdge';
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
  /**
   * The item at the end of MailingAddressEdge.
   */
  node: GetCustomerAddresses_customer_addresses_edges_node;
}

export interface GetCustomerAddresses_customer_addresses {
  __typename: 'MailingAddressConnection';
  /**
   * Information to aid in pagination.
   */
  pageInfo: GetCustomerAddresses_customer_addresses_pageInfo;
  /**
   * A list of edges.
   */
  edges: GetCustomerAddresses_customer_addresses_edges[];
}

export interface GetCustomerAddresses_customer_defaultAddress {
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
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   */
  phone: string | null;
  /**
   * The name of the city, district, village, or town.
   */
  city: string | null;
  /**
   * The region of the address, such as the province, state, or district.
   */
  province: string | null;
  /**
   * The first line of the address. Typically the street address or PO Box number.
   */
  address1: string | null;
  /**
   * The zip or postal code of the address.
   */
  zip: string | null;
  /**
   * The name of the country.
   */
  country: string | null;
}

export interface GetCustomerAddresses_customer {
  __typename: 'Customer';
  /**
   * A unique ID for the customer.
   */
  id: string;
  /**
   * A list of addresses for the customer.
   */
  addresses: GetCustomerAddresses_customer_addresses;
  /**
   * The customer’s default address.
   */
  defaultAddress: GetCustomerAddresses_customer_defaultAddress | null;
}

export interface GetCustomerAddresses {
  /**
   * The customer associated with the given access token. Tokens are obtained by using the
   * [`customerAccessTokenCreate` mutation](https: // shopify.dev/docs/api/storefront/latest/mutations/customerAccessTokenCreate).
   */
  customer: GetCustomerAddresses_customer | null;
}

export interface GetCustomerAddressesVariables {
  customerAccessToken: string;
  first: number;
  after?: string | null;
}
