/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { WishlistProductInput } from './globalTypes';

// ====================================================
// GraphQL mutation operation: AddToWishlist
// ====================================================

export interface AddToWishlist_addToWishlist {
  __typename: 'WishlistProduct';
  id: string;
  handle: string;
  images: string[];
  title: string;
  price: number;
  discount: number;
  availableForSale: boolean;
}

export interface AddToWishlist {
  addToWishlist: (AddToWishlist_addToWishlist | null)[];
}

export interface AddToWishlistVariables {
  product: WishlistProductInput;
}
