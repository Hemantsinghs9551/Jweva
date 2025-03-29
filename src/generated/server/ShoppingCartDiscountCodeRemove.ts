/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ShoppingCartDiscountCodeRemove
// ====================================================

export interface ShoppingCartDiscountCodeRemove_checkoutDiscountCodeRemove_checkout {
  __typename: 'Checkout';
  /**
   * A globally-unique ID.
   */
  id: string;
}

export interface ShoppingCartDiscountCodeRemove_checkoutDiscountCodeRemove_checkoutUserErrors {
  __typename: 'CheckoutUserError';
  /**
   * The error message.
   */
  message: string;
}

export interface ShoppingCartDiscountCodeRemove_checkoutDiscountCodeRemove {
  __typename: 'CheckoutDiscountCodeRemovePayload';
  /**
   * The updated checkout object.
   */
  checkout: ShoppingCartDiscountCodeRemove_checkoutDiscountCodeRemove_checkout | null;
  /**
   * The list of errors that occurred from executing the mutation.
   */
  checkoutUserErrors: ShoppingCartDiscountCodeRemove_checkoutDiscountCodeRemove_checkoutUserErrors[];
}

export interface ShoppingCartDiscountCodeRemove {
  /**
   * Removes the applied discounts from an existing checkout.
   */
  checkoutDiscountCodeRemove: ShoppingCartDiscountCodeRemove_checkoutDiscountCodeRemove | null;
}

export interface ShoppingCartDiscountCodeRemoveVariables {
  checkoutId: string;
}
