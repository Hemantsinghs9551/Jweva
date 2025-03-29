/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import {
  ProductCollectionSortKeys,
  CountryCode,
  CurrencyCode,
} from './globalTypes';

// ====================================================
// GraphQL query operation: GetCollection
// ====================================================

export interface GetCollection_collectionByHandle_products_pageInfo {
  __typename: 'PageInfo';
  /**
   * Whether there are more pages to fetch following the current page.
   */
  hasNextPage: boolean;
}

export interface GetCollection_collectionByHandle_products_edges_node_priceRange_minVariantPrice {
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

export interface GetCollection_collectionByHandle_products_edges_node_priceRange_maxVariantPrice {
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

export interface GetCollection_collectionByHandle_products_edges_node_priceRange {
  __typename: 'ProductPriceRange';
  /**
   * The lowest variant's price.
   */
  minVariantPrice: GetCollection_collectionByHandle_products_edges_node_priceRange_minVariantPrice;
  /**
   * The highest variant's price.
   */
  maxVariantPrice: GetCollection_collectionByHandle_products_edges_node_priceRange_maxVariantPrice;
}

export interface GetCollection_collectionByHandle_products_edges_node_images_edges_node {
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

export interface GetCollection_collectionByHandle_products_edges_node_images_edges {
  __typename: 'ImageEdge';
  /**
   * The item at the end of ImageEdge.
   */
  node: GetCollection_collectionByHandle_products_edges_node_images_edges_node;
}

export interface GetCollection_collectionByHandle_products_edges_node_images {
  __typename: 'ImageConnection';
  /**
   * A list of edges.
   */
  edges: GetCollection_collectionByHandle_products_edges_node_images_edges[];
}

export interface GetCollection_collectionByHandle_products_edges_node_variants_edges_node_compareAtPriceV2 {
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

export interface GetCollection_collectionByHandle_products_edges_node_variants_edges_node_priceV2 {
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

export interface GetCollection_collectionByHandle_products_edges_node_variants_edges_node {
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
  compareAtPriceV2: GetCollection_collectionByHandle_products_edges_node_variants_edges_node_compareAtPriceV2 | null;
  /**
   * The product variant’s price.
   */
  priceV2: GetCollection_collectionByHandle_products_edges_node_variants_edges_node_priceV2;
}

export interface GetCollection_collectionByHandle_products_edges_node_variants_edges {
  __typename: 'ProductVariantEdge';
  /**
   * The item at the end of ProductVariantEdge.
   */
  node: GetCollection_collectionByHandle_products_edges_node_variants_edges_node;
}

export interface GetCollection_collectionByHandle_products_edges_node_variants {
  __typename: 'ProductVariantConnection';
  /**
   * A list of edges.
   */
  edges: GetCollection_collectionByHandle_products_edges_node_variants_edges[];
}

export interface GetCollection_collectionByHandle_products_edges_node {
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
  priceRange: GetCollection_collectionByHandle_products_edges_node_priceRange;
  /**
   * List of images associated with the product.
   */
  images: GetCollection_collectionByHandle_products_edges_node_images;
  /**
   * List of the product’s variants.
   */
  variants: GetCollection_collectionByHandle_products_edges_node_variants;
}

export interface GetCollection_collectionByHandle_products_edges {
  __typename: 'ProductEdge';
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
  /**
   * The item at the end of ProductEdge.
   */
  node: GetCollection_collectionByHandle_products_edges_node;
}

export interface GetCollection_collectionByHandle_products {
  __typename: 'ProductConnection';
  /**
   * Information to aid in pagination.
   */
  pageInfo: GetCollection_collectionByHandle_products_pageInfo;
  /**
   * A list of edges.
   */
  edges: GetCollection_collectionByHandle_products_edges[];
}

export interface GetCollection_collectionByHandle {
  __typename: 'Collection';
  /**
   * A globally-unique ID.
   */
  id: string;
  /**
   * The collection’s name. Limit of 255 characters.
   */
  title: string;
  /**
   * A human-friendly unique string for the collection automatically generated from its title.
   * Limit of 255 characters.
   */
  handle: string;
  /**
   * List of products in the collection.
   */
  products: GetCollection_collectionByHandle_products;
}

export interface GetCollection {
  /**
   * Find a collection by its handle.
   */
  collectionByHandle: GetCollection_collectionByHandle | null;
}

export interface GetCollectionVariables {
  collectionHandle: string;
  sortKey?: ProductCollectionSortKeys | null;
  reverse?: boolean | null;
  first: number;
  after?: string | null;
  country: CountryCode;
}
