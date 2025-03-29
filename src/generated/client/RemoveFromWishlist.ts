/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RemoveFromWishlist
// ====================================================

export interface RemoveFromWishlist_removeFromWishlist {
  __typename: 'WishlistProduct';
  id: string;
  handle: string;
  images: string[];
  title: string;
  price: number;
  discount: number;
  availableForSale: boolean;
}

export interface RemoveFromWishlist {
  removeFromWishlist: (RemoveFromWishlist_removeFromWishlist | null)[];
}

export interface RemoveFromWishlistVariables {
  productHandle: string;
}
