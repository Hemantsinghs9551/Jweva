/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCustomerData
// ====================================================

export interface GetCustomerData_customer_lastIncompleteCheckout_lineItems_edges_node_variant {
  __typename: 'ProductVariant';
  /**
   * A globally-unique ID.
   */
  id: string;
}

export interface GetCustomerData_customer_lastIncompleteCheckout_lineItems_edges_node {
  __typename: 'CheckoutLineItem';
  /**
   * Product variant of the line item.
   */
  variant: GetCustomerData_customer_lastIncompleteCheckout_lineItems_edges_node_variant | null;
  /**
   * The quantity of the line item.
   */
  quantity: number;
}

export interface GetCustomerData_customer_lastIncompleteCheckout_lineItems_edges {
  __typename: 'CheckoutLineItemEdge';
  /**
   * The item at the end of CheckoutLineItemEdge.
   */
  node: GetCustomerData_customer_lastIncompleteCheckout_lineItems_edges_node;
}

export interface GetCustomerData_customer_lastIncompleteCheckout_lineItems {
  __typename: 'CheckoutLineItemConnection';
  /**
   * A list of edges.
   */
  edges: GetCustomerData_customer_lastIncompleteCheckout_lineItems_edges[];
}

export interface GetCustomerData_customer_lastIncompleteCheckout {
  __typename: 'Checkout';
  /**
   * A globally-unique ID.
   */
  id: string;
  /**
   * A list of line item objects, each one containing information about an item in the checkout.
   */
  lineItems: GetCustomerData_customer_lastIncompleteCheckout_lineItems;
}

export interface GetCustomerData_customer {
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
  /**
   * The customer's most recently updated, incomplete checkout.
   */
  lastIncompleteCheckout: GetCustomerData_customer_lastIncompleteCheckout | null;
}

export interface GetCustomerData {
  /**
   * The customer associated with the given access token. Tokens are obtained by using the
   * [`customerAccessTokenCreate` mutation](https: // shopify.dev/docs/api/storefront/latest/mutations/customerAccessTokenCreate).
   */
  customer: GetCustomerData_customer | null;
}

export interface GetCustomerDataVariables {
  accessToken: string;
}
