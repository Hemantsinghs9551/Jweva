/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetWishlist
// ====================================================

export interface GetWishlist_wishlist {
  __typename: 'WishlistProduct';
  id: string;
  handle: string;
  images: string[];
  title: string;
  price: number;
  discount: number;
  availableForSale: boolean;
}

export interface GetWishlist {
  wishlist: GetWishlist_wishlist[];
}
