/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetShoppingCart
// ====================================================

export interface GetShoppingCart_shoppingCart_items {
  __typename: 'LineItem';
  quantity: number;
  variantId: string;
}

export interface GetShoppingCart_shoppingCart {
  __typename: 'ShoppingCart';
  id: string;
  items: GetShoppingCart_shoppingCart_items[];
}

export interface GetShoppingCart {
  shoppingCart: GetShoppingCart_shoppingCart;
}
