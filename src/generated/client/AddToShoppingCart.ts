/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddToShoppingCart
// ====================================================

export interface AddToShoppingCart_addToShoppingCart_items {
  __typename: 'LineItem';
  quantity: number;
  variantId: string;
}

export interface AddToShoppingCart_addToShoppingCart {
  __typename: 'ShoppingCart';
  id: string;
  items: AddToShoppingCart_addToShoppingCart_items[];
}

export interface AddToShoppingCart {
  addToShoppingCart: AddToShoppingCart_addToShoppingCart;
}

export interface AddToShoppingCartVariables {
  variantId: string;
  quantity: number;
}
