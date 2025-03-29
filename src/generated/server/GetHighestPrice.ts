/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CountryCode, CurrencyCode } from './globalTypes';

// ====================================================
// GraphQL query operation: GetHighestPrice
// ====================================================

export interface GetHighestPrice_products_edges_node_priceRange_maxVariantPrice {
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

export interface GetHighestPrice_products_edges_node_priceRange {
  __typename: 'ProductPriceRange';
  /**
   * The highest variant's price.
   */
  maxVariantPrice: GetHighestPrice_products_edges_node_priceRange_maxVariantPrice;
}

export interface GetHighestPrice_products_edges_node {
  __typename: 'Product';
  /**
   * The price range.
   */
  priceRange: GetHighestPrice_products_edges_node_priceRange;
}

export interface GetHighestPrice_products_edges {
  __typename: 'ProductEdge';
  /**
   * The item at the end of ProductEdge.
   */
  node: GetHighestPrice_products_edges_node;
}

export interface GetHighestPrice_products {
  __typename: 'ProductConnection';
  /**
   * A list of edges.
   */
  edges: GetHighestPrice_products_edges[];
}

export interface GetHighestPrice {
  /**
   * List of the shop’s products.
   */
  products: GetHighestPrice_products;
}

export interface GetHighestPriceVariables {
  country: CountryCode;
}
