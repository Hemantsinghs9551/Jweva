/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CountryCode, CurrencyCode } from './globalTypes';

// ====================================================
// GraphQL query operation: GetProductByHandle
// ====================================================

export interface GetProductByHandle_productByHandle_options {
  __typename: 'ProductOption';
  /**
   * The product option’s name.
   */
  name: string;
  /**
   * The corresponding value to the product option name.
   */
  values: string[];
}

export interface GetProductByHandle_productByHandle_images_edges_node {
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

export interface GetProductByHandle_productByHandle_images_edges {
  __typename: 'ImageEdge';
  /**
   * The item at the end of ImageEdge.
   */
  node: GetProductByHandle_productByHandle_images_edges_node;
}

export interface GetProductByHandle_productByHandle_images {
  __typename: 'ImageConnection';
  /**
   * A list of edges.
   */
  edges: GetProductByHandle_productByHandle_images_edges[];
}

export interface GetProductByHandle_productByHandle_variants_edges_node_compareAtPriceV2 {
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

export interface GetProductByHandle_productByHandle_variants_edges_node_priceV2 {
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

export interface GetProductByHandle_productByHandle_variants_edges_node {
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
  compareAtPriceV2: GetProductByHandle_productByHandle_variants_edges_node_compareAtPriceV2 | null;
  /**
   * The product variant’s price.
   */
  priceV2: GetProductByHandle_productByHandle_variants_edges_node_priceV2;
}

export interface GetProductByHandle_productByHandle_variants_edges {
  __typename: 'ProductVariantEdge';
  /**
   * The item at the end of ProductVariantEdge.
   */
  node: GetProductByHandle_productByHandle_variants_edges_node;
}

export interface GetProductByHandle_productByHandle_variants {
  __typename: 'ProductVariantConnection';
  /**
   * A list of edges.
   */
  edges: GetProductByHandle_productByHandle_variants_edges[];
}

export interface GetProductByHandle_productByHandle {
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
   * Stripped description of the product, single line with HTML tags removed.
   */
  description: string;
  /**
   * The URL used for viewing the resource on the shop's Online Store. Returns
   * `null` if the resource is currently not published to the Online Store sales channel.
   */
  onlineStoreUrl: any | null;
  /**
   * List of product options.
   */
  options: GetProductByHandle_productByHandle_options[];
  /**
   * List of images associated with the product.
   */
  images: GetProductByHandle_productByHandle_images;
  /**
   * List of the product’s variants.
   */
  variants: GetProductByHandle_productByHandle_variants;
}

export interface GetProductByHandle {
  /**
   * Find a product by its handle.
   */
  productByHandle: GetProductByHandle_productByHandle | null;
}

export interface GetProductByHandleVariables {
  productHandle: string;
  country: CountryCode;
}
