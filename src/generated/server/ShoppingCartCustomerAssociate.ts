/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ShoppingCartCustomerAssociate
// ====================================================

export interface ShoppingCartCustomerAssociate_checkoutCustomerAssociateV2_checkout_lineItems_edges_node_variant {
  __typename: 'ProductVariant';
  /**
   * A globally-unique ID.
   */
  id: string;
  /**
   * The total sellable quantity of the variant for online sales channels.
   */
  quantityAvailable: number | null;
}

export interface ShoppingCartCustomerAssociate_checkoutCustomerAssociateV2_checkout_lineItems_edges_node {
  __typename: 'CheckoutLineItem';
  /**
   * Title of the line item. Defaults to the product's title.
   */
  title: string;
  /**
   * The quantity of the line item.
   */
  quantity: number;
  /**
   * Product variant of the line item.
   */
  variant: ShoppingCartCustomerAssociate_checkoutCustomerAssociateV2_checkout_lineItems_edges_node_variant | null;
}

export interface ShoppingCartCustomerAssociate_checkoutCustomerAssociateV2_checkout_lineItems_edges {
  __typename: 'CheckoutLineItemEdge';
  /**
   * The item at the end of CheckoutLineItemEdge.
   */
  node: ShoppingCartCustomerAssociate_checkoutCustomerAssociateV2_checkout_lineItems_edges_node;
}

export interface ShoppingCartCustomerAssociate_checkoutCustomerAssociateV2_checkout_lineItems {
  __typename: 'CheckoutLineItemConnection';
  /**
   * A list of edges.
   */
  edges: ShoppingCartCustomerAssociate_checkoutCustomerAssociateV2_checkout_lineItems_edges[];
}

export interface ShoppingCartCustomerAssociate_checkoutCustomerAssociateV2_checkout {
  __typename: 'Checkout';
  /**
   * A globally-unique ID.
   */
  id: string;
  /**
   * A list of line item objects, each one containing information about an item in the checkout.
   */
  lineItems: ShoppingCartCustomerAssociate_checkoutCustomerAssociateV2_checkout_lineItems;
}

export interface ShoppingCartCustomerAssociate_checkoutCustomerAssociateV2_customer {
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
}

export interface ShoppingCartCustomerAssociate_checkoutCustomerAssociateV2_checkoutUserErrors {
  __typename: 'CheckoutUserError';
  /**
   * The error message.
   */
  message: string;
}

export interface ShoppingCartCustomerAssociate_checkoutCustomerAssociateV2 {
  __typename: 'CheckoutCustomerAssociateV2Payload';
  /**
   * The updated checkout object.
   */
  checkout: ShoppingCartCustomerAssociate_checkoutCustomerAssociateV2_checkout | null;
  /**
   * The associated customer object.
   */
  customer: ShoppingCartCustomerAssociate_checkoutCustomerAssociateV2_customer | null;
  /**
   * The list of errors that occurred from executing the mutation.
   */
  checkoutUserErrors: ShoppingCartCustomerAssociate_checkoutCustomerAssociateV2_checkoutUserErrors[];
}

export interface ShoppingCartCustomerAssociate {
  /**
   * Associates a customer to the checkout.
   */
  checkoutCustomerAssociateV2: ShoppingCartCustomerAssociate_checkoutCustomerAssociateV2 | null;
}

export interface ShoppingCartCustomerAssociateVariables {
  checkoutId: string;
  customerAccessToken: string;
}
