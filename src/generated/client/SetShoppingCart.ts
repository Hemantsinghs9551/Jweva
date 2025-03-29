/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LineItemInput } from './globalTypes';

// ====================================================
// GraphQL mutation operation: SetShoppingCart
// ====================================================

export interface SetShoppingCart_setShoppingCart_items {
  __typename: 'LineItem';
  quantity: number;
  variantId: string;
}

export interface SetShoppingCart_setShoppingCart {
  __typename: 'ShoppingCart';
  id: string;
  items: SetShoppingCart_setShoppingCart_items[];
}

export interface SetShoppingCart {
  setShoppingCart: SetShoppingCart_setShoppingCart;
}

export interface SetShoppingCartVariables {
  items: LineItemInput[];
  id: string;
}
