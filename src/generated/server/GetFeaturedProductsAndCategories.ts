/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CountryCode, CurrencyCode } from './globalTypes';

// ====================================================
// GraphQL query operation: GetFeaturedProductsAndCategories
// ====================================================

export interface GetFeaturedProductsAndCategories_collections_edges_node_image {
  __typename: 'Image';
  /**
   * The location of the transformed image as a URL.
   *
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type doesn't support will be ignored.
   */
  transformedSrc: any;
}

export interface GetFeaturedProductsAndCategories_collections_edges_node {
  __typename: 'Collection';
  /**
   * Image associated with the collection.
   */
  image: GetFeaturedProductsAndCategories_collections_edges_node_image | null;
  /**
   * A human-friendly unique string for the collection automatically generated from its title.
   * Limit of 255 characters.
   */
  handle: string;
  /**
   * A globally-unique ID.
   */
  id: string;
  /**
   * The collection’s name. Limit of 255 characters.
   */
  title: string;
}

export interface GetFeaturedProductsAndCategories_collections_edges {
  __typename: 'CollectionEdge';
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
  /**
   * The item at the end of CollectionEdge.
   */
  node: GetFeaturedProductsAndCategories_collections_edges_node;
}

export interface GetFeaturedProductsAndCategories_collections_pageInfo {
  __typename: 'PageInfo';
  /**
   * Whether there are more pages to fetch following the current page.
   */
  hasNextPage: boolean;
}

export interface GetFeaturedProductsAndCategories_collections {
  __typename: 'CollectionConnection';
  /**
   * A list of edges.
   */
  edges: GetFeaturedProductsAndCategories_collections_edges[];
  /**
   * Information to aid in pagination.
   */
  pageInfo: GetFeaturedProductsAndCategories_collections_pageInfo;
}

export interface GetFeaturedProductsAndCategories_products_pageInfo {
  __typename: 'PageInfo';
  /**
   * Whether there are more pages to fetch following the current page.
   */
  hasNextPage: boolean;
}

export interface GetFeaturedProductsAndCategories_products_edges_node_priceRange_minVariantPrice {
  __typename: 'MoneyV2';
  /**
   * Decimal money amount.
   */
  amount: any;
  /**
   * Currency of the money.
   */
  currencyCode: CurrencyCode;
}

export interface GetFeaturedProductsAndCategories_products_edges_node_priceRange_maxVariantPrice {
  __typename: 'MoneyV2';
  /**
   * Decimal money amount.
   */
  amount: any;
  /**
   * Currency of the money.
   */
  currencyCode: CurrencyCode;
}

export interface GetFeaturedProductsAndCategories_products_edges_node_priceRange {
  __typename: 'ProductPriceRange';
  /**
   * The lowest variant's price.
   */
  minVariantPrice: GetFeaturedProductsAndCategories_products_edges_node_priceRange_minVariantPrice;
  /**
   * The highest variant's price.
   */
  maxVariantPrice: GetFeaturedProductsAndCategories_products_edges_node_priceRange_maxVariantPrice;
}

export interface GetFeaturedProductsAndCategories_products_edges_node_images_edges_node {
  __typename: 'Image';
  /**
   * A unique ID for the image.
   */
  id: string | null;
  /**
   * The location of the original image as a URL.
   *
   * If there are any existing transformations in the original source URL, they will remain and not be stripped.
   */
  originalSrc: any;
  /**
   * The location of the transformed image as a URL.
   *
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type doesn't support will be ignored.
   */
  transformedSrc: any;
  /**
   * A word or phrase to share the nature or contents of an image.
   */
  altText: string | null;
}

export interface GetFeaturedProductsAndCategories_products_edges_node_images_edges {
  __typename: 'ImageEdge';
  /**
   * The item at the end of ImageEdge.
   */
  node: GetFeaturedProductsAndCategories_products_edges_node_images_edges_node;
}

export interface GetFeaturedProductsAndCategories_products_edges_node_images {
  __typename: 'ImageConnection';
  /**
   * A list of edges.
   */
  edges: GetFeaturedProductsAndCategories_products_edges_node_images_edges[];
}

export interface GetFeaturedProductsAndCategories_products_edges_node_variants_edges_node_compareAtPriceV2 {
  __typename: 'MoneyV2';
  /**
   * Decimal money amount.
   */
  amount: any;
  /**
   * Currency of the money.
   */
  currencyCode: CurrencyCode;
}

export interface GetFeaturedProductsAndCategories_products_edges_node_variants_edges_node_priceV2 {
  __typename: 'MoneyV2';
  /**
   * Decimal money amount.
   */
  amount: any;
  /**
   * Currency of the money.
   */
  currencyCode: CurrencyCode;
}

export interface GetFeaturedProductsAndCategories_products_edges_node_variants_edges_node {
  __typename: 'ProductVariant';
  /**
   * A globally-unique ID.
   */
  id: string;
  /**
   * The total sellable quantity of the variant for online sales channels.
   */
  quantityAvailable: number | null;
  /**
   * The compare at price of the variant. This can be used to mark a variant as on
   * sale, when `compareAtPriceV2` is higher than `priceV2`.
   */
  compareAtPriceV2: GetFeaturedProductsAndCategories_products_edges_node_variants_edges_node_compareAtPriceV2 | null;
  /**
   * The product variant’s price.
   */
  priceV2: GetFeaturedProductsAndCategories_products_edges_node_variants_edges_node_priceV2;
}

export interface GetFeaturedProductsAndCategories_products_edges_node_variants_edges {
  __typename: 'ProductVariantEdge';
  /**
   * The item at the end of ProductVariantEdge.
   */
  node: GetFeaturedProductsAndCategories_products_edges_node_variants_edges_node;
}

export interface GetFeaturedProductsAndCategories_products_edges_node_variants {
  __typename: 'ProductVariantConnection';
  /**
   * A list of edges.
   */
  edges: GetFeaturedProductsAndCategories_products_edges_node_variants_edges[];
}

export interface GetFeaturedProductsAndCategories_products_edges_node {
  __typename: 'Product';
  /**
   * A globally-unique ID.
   */
  id: string;
  /**
   * The product’s title.
   */
  title: string;
  /**
   * A human-friendly unique string for the Product automatically generated from its title.
   * They are used by the Liquid templating language to refer to objects.
   */
  handle: string;
  /**
   * Indicates if at least one product variant is available for sale.
   */
  availableForSale: boolean;
  /**
   * A categorization that a product can be tagged with, commonly used for filtering and searching.
   */
  productType: string;
  /**
   * The price range.
   */
  priceRange: GetFeaturedProductsAndCategories_products_edges_node_priceRange;
  /**
   * List of images associated with the product.
   */
  images: GetFeaturedProductsAndCategories_products_edges_node_images;
  /**
   * List of the product’s variants.
   */
  variants: GetFeaturedProductsAndCategories_products_edges_node_variants;
}

export interface GetFeaturedProductsAndCategories_products_edges {
  __typename: 'ProductEdge';
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
  /**
   * The item at the end of ProductEdge.
   */
  node: GetFeaturedProductsAndCategories_products_edges_node;
}

export interface GetFeaturedProductsAndCategories_products {
  __typename: 'ProductConnection';
  /**
   * Information to aid in pagination.
   */
  pageInfo: GetFeaturedProductsAndCategories_products_pageInfo;
  /**
   * A list of edges.
   */
  edges: GetFeaturedProductsAndCategories_products_edges[];
}

export interface GetFeaturedProductsAndCategories {
  /**
   * List of the shop’s collections.
   */
  collections: GetFeaturedProductsAndCategories_collections;
  /**
   * List of the shop’s products.
   */
  products: GetFeaturedProductsAndCategories_products;
}

export interface GetFeaturedProductsAndCategoriesVariables {
  first: number;
  after?: string | null;
  country: CountryCode;
}
