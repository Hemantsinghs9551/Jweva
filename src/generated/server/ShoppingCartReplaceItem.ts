/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import {
  CheckoutLineItemInput,
  CountryCode,
  CurrencyCode,
} from './globalTypes';

// ====================================================
// GraphQL mutation operation: ShoppingCartReplaceItem
// ====================================================

export interface ShoppingCartReplaceItem_checkoutLineItemsReplace_checkout_lineItemsSubtotalPrice {
  __typename: 'MoneyV2';
  /**
   * Decimal money amount.
   */
  amount: any;
}

export interface ShoppingCartReplaceItem_checkoutLineItemsReplace_checkout_subtotalPriceV2 {
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

export interface ShoppingCartReplaceItem_checkoutLineItemsReplace_checkout_paymentDueV2 {
  __typename: 'MoneyV2';
  /**
   * Decimal money amount.
   */
  amount: any;
}

export interface ShoppingCartReplaceItem_checkoutLineItemsReplace_checkout_lineItems_edges_node_discountAllocations_allocatedAmount {
  __typename: 'MoneyV2';
  /**
   * Decimal money amount.
   */
  amount: any;
}

export interface ShoppingCartReplaceItem_checkoutLineItemsReplace_checkout_lineItems_edges_node_discountAllocations {
  __typename: 'DiscountAllocation';
  /**
   * Amount of discount allocated.
   */
  allocatedAmount: ShoppingCartReplaceItem_checkoutLineItemsReplace_checkout_lineItems_edges_node_discountAllocations_allocatedAmount;
}

export interface ShoppingCartReplaceItem_checkoutLineItemsReplace_checkout_lineItems_edges_node_variant_compareAtPriceV2 {
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

export interface ShoppingCartReplaceItem_checkoutLineItemsReplace_checkout_lineItems_edges_node_variant_priceV2 {
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

export interface ShoppingCartReplaceItem_checkoutLineItemsReplace_checkout_lineItems_edges_node_variant_selectedOptions {
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

export interface ShoppingCartReplaceItem_checkoutLineItemsReplace_checkout_lineItems_edges_node_variant_image {
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

export interface ShoppingCartReplaceItem_checkoutLineItemsReplace_checkout_lineItems_edges_node_variant {
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
  compareAtPriceV2: ShoppingCartReplaceItem_checkoutLineItemsReplace_checkout_lineItems_edges_node_variant_compareAtPriceV2 | null;
  /**
   * The product variant’s price.
   */
  priceV2: ShoppingCartReplaceItem_checkoutLineItemsReplace_checkout_lineItems_edges_node_variant_priceV2;
  /**
   * List of product options applied to the variant.
   */
  selectedOptions: ShoppingCartReplaceItem_checkoutLineItemsReplace_checkout_lineItems_edges_node_variant_selectedOptions[];
  /**
   * Image associated with the product variant. This field falls back to the product image if no image is available.
   */
  image: ShoppingCartReplaceItem_checkoutLineItemsReplace_checkout_lineItems_edges_node_variant_image | null;
}

export interface ShoppingCartReplaceItem_checkoutLineItemsReplace_checkout_lineItems_edges_node {
  __typename: 'CheckoutLineItem';
  /**
   * A globally-unique ID.
   */
  id: string;
  /**
   * The discounts that have been allocated onto the checkout line item by discount applications.
   */
  discountAllocations: ShoppingCartReplaceItem_checkoutLineItemsReplace_checkout_lineItems_edges_node_discountAllocations[];
  /**
   * Title of the line item. Defaults to the product's title.
   */
  title: string;
  /**
   * The quantity of the line item.
   */
  quantity: number;
  /**
   * Product variant of the line item.
   */
  variant: ShoppingCartReplaceItem_checkoutLineItemsReplace_checkout_lineItems_edges_node_variant | null;
}

export interface ShoppingCartReplaceItem_checkoutLineItemsReplace_checkout_lineItems_edges {
  __typename: 'CheckoutLineItemEdge';
  /**
   * The item at the end of CheckoutLineItemEdge.
   */
  node: ShoppingCartReplaceItem_checkoutLineItemsReplace_checkout_lineItems_edges_node;
}

export interface ShoppingCartReplaceItem_checkoutLineItemsReplace_checkout_lineItems {
  __typename: 'CheckoutLineItemConnection';
  /**
   * A list of edges.
   */
  edges: ShoppingCartReplaceItem_checkoutLineItemsReplace_checkout_lineItems_edges[];
}

export interface ShoppingCartReplaceItem_checkoutLineItemsReplace_checkout {
  __typename: 'Checkout';
  /**
   * The sum of all the prices of all the items in the checkout. Duties, taxes, shipping and discounts excluded.
   */
  lineItemsSubtotalPrice: ShoppingCartReplaceItem_checkoutLineItemsReplace_checkout_lineItemsSubtotalPrice;
  /**
   * A globally-unique ID.
   */
  id: string;
  /**
   * The currency code for the checkout.
   */
  currencyCode: CurrencyCode;
  /**
   * The price at checkout before duties, shipping, and taxes.
   */
  subtotalPriceV2: ShoppingCartReplaceItem_checkoutLineItemsReplace_checkout_subtotalPriceV2;
  /**
   * The amount left to be paid. This is equal to the cost of the line items,
   * duties, taxes, and shipping, minus discounts and gift cards.
   */
  paymentDueV2: ShoppingCartReplaceItem_checkoutLineItemsReplace_checkout_paymentDueV2;
  /**
   * A list of line item objects, each one containing information about an item in the checkout.
   */
  lineItems: ShoppingCartReplaceItem_checkoutLineItemsReplace_checkout_lineItems;
}

export interface ShoppingCartReplaceItem_checkoutLineItemsReplace {
  __typename: 'CheckoutLineItemsReplacePayload';
  /**
   * The updated checkout object.
   */
  checkout: ShoppingCartReplaceItem_checkoutLineItemsReplace_checkout | null;
}

export interface ShoppingCartReplaceItem {
  /**
   * Sets a list of line items to a checkout.
   */
  checkoutLineItemsReplace: ShoppingCartReplaceItem_checkoutLineItemsReplace | null;
}

export interface ShoppingCartReplaceItemVariables {
  lineItems: CheckoutLineItemInput[];
  checkoutID: string;
  country: CountryCode;
}
