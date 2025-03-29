/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ProductSortKeys, CountryCode, CurrencyCode } from './globalTypes';

// ====================================================
// GraphQL query operation: SearchResults
// ====================================================

export interface SearchResults_products_pageInfo {
  __typename: 'PageInfo';
  /**
   * Whether there are more pages to fetch following the current page.
   */
  hasNextPage: boolean;
}

export interface SearchResults_products_edges_node_priceRange_minVariantPrice {
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

export interface SearchResults_products_edges_node_priceRange_maxVariantPrice {
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

export interface SearchResults_products_edges_node_priceRange {
  __typename: 'ProductPriceRange';
  /**
   * The lowest variant's price.
   */
  minVariantPrice: SearchResults_products_edges_node_priceRange_minVariantPrice;
  /**
   * The highest variant's price.
   */
  maxVariantPrice: SearchResults_products_edges_node_priceRange_maxVariantPrice;
}

export interface SearchResults_products_edges_node_images_edges_node {
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

export interface SearchResults_products_edges_node_images_edges {
  __typename: 'ImageEdge';
  /**
   * The item at the end of ImageEdge.
   */
  node: SearchResults_products_edges_node_images_edges_node;
}

export interface SearchResults_products_edges_node_images {
  __typename: 'ImageConnection';
  /**
   * A list of edges.
   */
  edges: SearchResults_products_edges_node_images_edges[];
}

export interface SearchResults_products_edges_node_variants_edges_node_compareAtPriceV2 {
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

export interface SearchResults_products_edges_node_variants_edges_node_priceV2 {
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

export interface SearchResults_products_edges_node_variants_edges_node {
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
  compareAtPriceV2: SearchResults_products_edges_node_variants_edges_node_compareAtPriceV2 | null;
  /**
   * The product variant’s price.
   */
  priceV2: SearchResults_products_edges_node_variants_edges_node_priceV2;
}

export interface SearchResults_products_edges_node_variants_edges {
  __typename: 'ProductVariantEdge';
  /**
   * The item at the end of ProductVariantEdge.
   */
  node: SearchResults_products_edges_node_variants_edges_node;
}

export interface SearchResults_products_edges_node_variants {
  __typename: 'ProductVariantConnection';
  /**
   * A list of edges.
   */
  edges: SearchResults_products_edges_node_variants_edges[];
}

export interface SearchResults_products_edges_node {
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
   * Indicates if at least one product variant is available for sale.
   */
  availableForSale: boolean;
  /**
   * The [product type](https: // help.shopify.com/manual/products/details/product-type)
   * that merchants define.
   */
  productType: string;
  /**
   * A unique, human-readable string of the product's title.
   * A handle can contain letters, hyphens (`-`), and numbers, but no spaces.
   * The handle is used in the online store URL for the product.
   */
  handle: string;
  /**
   * The minimum and maximum prices of a product, expressed in decimal numbers.
   * For example, if the product is priced between $10.00 and $50.00,
   * then the price range is $10.00 - $50.00.
   */
  priceRange: SearchResults_products_edges_node_priceRange;
  /**
   * List of images associated with the product.
   */
  images: SearchResults_products_edges_node_images;
  /**
   * A list of [variants](/docs/api/storefront/latest/objects/ProductVariant) that are associated with the product.
   */
  variants: SearchResults_products_edges_node_variants;
}

export interface SearchResults_products_edges {
  __typename: 'ProductEdge';
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
  /**
   * The item at the end of ProductEdge.
   */
  node: SearchResults_products_edges_node;
}

export interface SearchResults_products {
  __typename: 'ProductConnection';
  /**
   * Information to aid in pagination.
   */
  pageInfo: SearchResults_products_pageInfo;
  /**
   * A list of edges.
   */
  edges: SearchResults_products_edges[];
}

export interface SearchResults {
  /**
   * Returns a list of the shop's products. For storefront search, use the
   * [`search`](https: // shopify.dev/docs/api/storefront/latest/queries/search) query.
   */
  products: SearchResults_products;
}

export interface SearchResultsVariables {
  searchText: string;
  sortKey?: ProductSortKeys | null;
  reverse?: boolean | null;
  first: number;
  after?: string | null;
  country: CountryCode;
}
