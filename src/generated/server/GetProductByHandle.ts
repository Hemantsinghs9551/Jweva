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
   * The name for the product that displays to customers. The title is used to construct the product's handle.
   * For example, if a product is titled "Black Sunglasses", then the handle is `black-sunglasses`.
   */
  title: string;
  /**
   * A unique, human-readable string of the product's title.
   * A handle can contain letters, hyphens (`-`), and numbers, but no spaces.
   * The handle is used in the online store URL for the product.
   */
  handle: string;
  /**
   * Indicates if at least one product variant is available for sale.
   */
  availableForSale: boolean;
  /**
   * A single-line description of the product, with [HTML tags](https: // developer.mozilla.org/en-US/docs/Web/HTML) removed.
   */
  description: string;
  /**
   * The product's URL on the online store.
   * If `null`, then the product isn't published to the online store sales channel.
   */
  onlineStoreUrl: any | null;
  /**
   * A list of product options. The limit is defined by the [shop's resource limits for product
   * options](/docs/api/admin-graphql/latest/objects/Shop#field-resourcelimits)
   * (`Shop.resourceLimits.maxProductOptions`).
   */
  options: GetProductByHandle_productByHandle_options[];
  /**
   * List of images associated with the product.
   */
  images: GetProductByHandle_productByHandle_images;
  /**
   * A list of [variants](/docs/api/storefront/latest/objects/ProductVariant) that are associated with the product.
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
