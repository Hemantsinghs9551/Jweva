/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CountryCode, CurrencyCode } from './globalTypes';

// ====================================================
// GraphQL query operation: GetOrderHistory
// ====================================================

export interface GetOrderHistory_customer_orders_pageInfo {
  __typename: 'PageInfo';
  /**
   * Whether there are more pages to fetch following the current page.
   */
  hasNextPage: boolean;
}

export interface GetOrderHistory_customer_orders_edges_node_subtotalPriceV2 {
  __typename: 'MoneyV2';
  /**
   * Decimal money amount.
   */
  amount: any;
}

export interface GetOrderHistory_customer_orders_edges_node_totalShippingPriceV2 {
  __typename: 'MoneyV2';
  /**
   * Decimal money amount.
   */
  amount: any;
}

export interface GetOrderHistory_customer_orders_edges_node_totalPriceV2 {
  __typename: 'MoneyV2';
  /**
   * Decimal money amount.
   */
  amount: any;
}

export interface GetOrderHistory_customer_orders_edges_node_shippingAddress {
  __typename: 'MailingAddress';
  /**
   * A globally-unique ID.
   */
  id: string;
  /**
   * The full name of the customer, based on firstName and lastName.
   */
  name: string | null;
  /**
   * The first name of the customer.
   */
  firstName: string | null;
  /**
   * The last name of the customer.
   */
  lastName: string | null;
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   */
  phone: string | null;
  /**
   * The name of the city, district, village, or town.
   */
  city: string | null;
  /**
   * The region of the address, such as the province, state, or district.
   */
  province: string | null;
  /**
   * The first line of the address. Typically the street address or PO Box number.
   */
  address1: string | null;
  /**
   * The zip or postal code of the address.
   */
  zip: string | null;
  /**
   * The name of the country.
   */
  country: string | null;
}

export interface GetOrderHistory_customer_orders_edges_node_lineItems_edges_node_discountAllocations_allocatedAmount {
  __typename: 'MoneyV2';
  /**
   * Decimal money amount.
   */
  amount: any;
}

export interface GetOrderHistory_customer_orders_edges_node_lineItems_edges_node_discountAllocations {
  __typename: 'DiscountAllocation';
  /**
   * Amount of discount allocated.
   */
  allocatedAmount: GetOrderHistory_customer_orders_edges_node_lineItems_edges_node_discountAllocations_allocatedAmount;
}

export interface GetOrderHistory_customer_orders_edges_node_lineItems_edges_node_variant_compareAtPriceV2 {
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

export interface GetOrderHistory_customer_orders_edges_node_lineItems_edges_node_variant_priceV2 {
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

export interface GetOrderHistory_customer_orders_edges_node_lineItems_edges_node_variant_selectedOptions {
  __typename: 'SelectedOption';
  /**
   * The product option’s name.
   */
  name: string;
  /**
   * The product option’s value.
   */
  value: string;
}

export interface GetOrderHistory_customer_orders_edges_node_lineItems_edges_node_variant_image {
  __typename: 'Image';
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
}

export interface GetOrderHistory_customer_orders_edges_node_lineItems_edges_node_variant {
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
  compareAtPriceV2: GetOrderHistory_customer_orders_edges_node_lineItems_edges_node_variant_compareAtPriceV2 | null;
  /**
   * The product variant’s price.
   */
  priceV2: GetOrderHistory_customer_orders_edges_node_lineItems_edges_node_variant_priceV2;
  /**
   * List of product options applied to the variant.
   */
  selectedOptions: GetOrderHistory_customer_orders_edges_node_lineItems_edges_node_variant_selectedOptions[];
  /**
   * Image associated with the product variant. This field falls back to the product image if no image is available.
   */
  image: GetOrderHistory_customer_orders_edges_node_lineItems_edges_node_variant_image | null;
}

export interface GetOrderHistory_customer_orders_edges_node_lineItems_edges_node {
  __typename: 'OrderLineItem';
  /**
   * The discounts that have been allocated onto the order line item by discount applications.
   */
  discountAllocations: GetOrderHistory_customer_orders_edges_node_lineItems_edges_node_discountAllocations[];
  /**
   * The title of the product combined with title of the variant.
   */
  title: string;
  /**
   * The number of products variants associated to the line item.
   */
  quantity: number;
  /**
   * The product variant object associated to the line item.
   */
  variant: GetOrderHistory_customer_orders_edges_node_lineItems_edges_node_variant | null;
}

export interface GetOrderHistory_customer_orders_edges_node_lineItems_edges {
  __typename: 'OrderLineItemEdge';
  /**
   * The item at the end of OrderLineItemEdge.
   */
  node: GetOrderHistory_customer_orders_edges_node_lineItems_edges_node;
}

export interface GetOrderHistory_customer_orders_edges_node_lineItems {
  __typename: 'OrderLineItemConnection';
  /**
   * A list of edges.
   */
  edges: GetOrderHistory_customer_orders_edges_node_lineItems_edges[];
}

export interface GetOrderHistory_customer_orders_edges_node {
  __typename: 'Order';
  /**
   * A globally-unique ID.
   */
  id: string;
  /**
   * A unique numeric identifier for the order for use by shop owner and customer.
   */
  orderNumber: number;
  /**
   * The date and time when the order was imported.
   * This value can be set to dates in the past when importing from other systems.
   * If no value is provided, it will be auto-generated based on current date and time.
   */
  processedAt: any;
  /**
   * Price of the order before duties, shipping and taxes.
   */
  subtotalPriceV2: GetOrderHistory_customer_orders_edges_node_subtotalPriceV2 | null;
  /**
   * The total cost of shipping.
   */
  totalShippingPriceV2: GetOrderHistory_customer_orders_edges_node_totalShippingPriceV2;
  /**
   * The sum of all the prices of all the items in the order, duties, taxes and discounts included (must be positive).
   */
  totalPriceV2: GetOrderHistory_customer_orders_edges_node_totalPriceV2;
  /**
   * The address to where the order will be shipped.
   */
  shippingAddress: GetOrderHistory_customer_orders_edges_node_shippingAddress | null;
  /**
   * List of the order’s line items.
   */
  lineItems: GetOrderHistory_customer_orders_edges_node_lineItems;
}

export interface GetOrderHistory_customer_orders_edges {
  __typename: 'OrderEdge';
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
  /**
   * The item at the end of OrderEdge.
   */
  node: GetOrderHistory_customer_orders_edges_node;
}

export interface GetOrderHistory_customer_orders {
  __typename: 'OrderConnection';
  /**
   * Information to aid in pagination.
   */
  pageInfo: GetOrderHistory_customer_orders_pageInfo;
  /**
   * A list of edges.
   */
  edges: GetOrderHistory_customer_orders_edges[];
}

export interface GetOrderHistory_customer {
  __typename: 'Customer';
  /**
   * A unique ID for the customer.
   */
  id: string;
  /**
   * The orders associated with the customer.
   */
  orders: GetOrderHistory_customer_orders;
}

export interface GetOrderHistory {
  /**
   * The customer associated with the given access token. Tokens are obtained by using the
   * [`customerAccessTokenCreate` mutation](https: // shopify.dev/docs/api/storefront/latest/mutations/customerAccessTokenCreate).
   */
  customer: GetOrderHistory_customer | null;
}

export interface GetOrderHistoryVariables {
  customerAccessToken: string;
  first: number;
  after?: string | null;
  country: CountryCode;
}
