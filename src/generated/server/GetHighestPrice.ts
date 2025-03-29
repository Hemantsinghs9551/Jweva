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
   * The minimum and maximum prices of a product, expressed in decimal numbers.
   * For example, if the product is priced between $10.00 and $50.00,
   * then the price range is $10.00 - $50.00.
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
   * Returns a list of the shop's products. For storefront search, use the
   * [`search`](https: // shopify.dev/docs/api/storefront/latest/queries/search) query.
   */
  products: GetHighestPrice_products;
}

export interface GetHighestPriceVariables {
  country: CountryCode;
}
