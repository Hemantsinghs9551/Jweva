/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MailingAddressInput, CurrencyCode } from './globalTypes';

// ====================================================
// GraphQL mutation operation: ShoppingCartUpdateAddress
// ====================================================

export interface ShoppingCartUpdateAddress_checkoutShippingAddressUpdateV2_checkoutUserErrors {
  __typename: 'CheckoutUserError';
  /**
   * The error message.
   */
  message: string;
}

export interface ShoppingCartUpdateAddress_checkoutShippingAddressUpdateV2_checkout_lineItemsSubtotalPrice {
  __typename: 'MoneyV2';
  /**
   * Decimal money amount.
   */
  amount: any;
}

export interface ShoppingCartUpdateAddress_checkoutShippingAddressUpdateV2_checkout_subtotalPriceV2 {
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

export interface ShoppingCartUpdateAddress_checkoutShippingAddressUpdateV2_checkout_paymentDueV2 {
  __typename: 'MoneyV2';
  /**
   * Decimal money amount.
   */
  amount: any;
}

export interface ShoppingCartUpdateAddress_checkoutShippingAddressUpdateV2_checkout_totalPriceV2 {
  __typename: 'MoneyV2';
  /**
   * Decimal money amount.
   */
  amount: any;
}

export interface ShoppingCartUpdateAddress_checkoutShippingAddressUpdateV2_checkout_shippingLine_priceV2 {
  __typename: 'MoneyV2';
  /**
   * Decimal money amount.
   */
  amount: any;
}

export interface ShoppingCartUpdateAddress_checkoutShippingAddressUpdateV2_checkout_shippingLine {
  __typename: 'ShippingRate';
  /**
   * Price of this shipping rate.
   */
  priceV2: ShoppingCartUpdateAddress_checkoutShippingAddressUpdateV2_checkout_shippingLine_priceV2;
}

export interface ShoppingCartUpdateAddress_checkoutShippingAddressUpdateV2_checkout_availableShippingRates_shippingRates_priceV2 {
  __typename: 'MoneyV2';
  /**
   * Decimal money amount.
   */
  amount: any;
}

export interface ShoppingCartUpdateAddress_checkoutShippingAddressUpdateV2_checkout_availableShippingRates_shippingRates {
  __typename: 'ShippingRate';
  /**
   * Human-readable unique identifier for this shipping rate.
   */
  handle: string;
  /**
   * Price of this shipping rate.
   */
  priceV2: ShoppingCartUpdateAddress_checkoutShippingAddressUpdateV2_checkout_availableShippingRates_shippingRates_priceV2;
  /**
   * Title of this shipping rate.
   */
  title: string;
}

export interface ShoppingCartUpdateAddress_checkoutShippingAddressUpdateV2_checkout_availableShippingRates {
  __typename: 'AvailableShippingRates';
  /**
   * Whether or not the shipping rates are ready.
   * The `shippingRates` field is `null` when this value is `false`.
   * This field should be polled until its value becomes `true`.
   */
  ready: boolean;
  /**
   * The fetched shipping rates. `null` until the `ready` field is `true`.
   */
  shippingRates:
    | ShoppingCartUpdateAddress_checkoutShippingAddressUpdateV2_checkout_availableShippingRates_shippingRates[]
    | null;
}

export interface ShoppingCartUpdateAddress_checkoutShippingAddressUpdateV2_checkout {
  __typename: 'Checkout';
  /**
   * The url pointing to the checkout accessible from the web.
   */
  webUrl: any;
  /**
   * The sum of all the prices of all the items in the checkout. Duties, taxes, shipping and discounts excluded.
   */
  lineItemsSubtotalPrice: ShoppingCartUpdateAddress_checkoutShippingAddressUpdateV2_checkout_lineItemsSubtotalPrice;
  /**
   * A globally-unique ID.
   */
  id: string;
  /**
   * The price at checkout before duties, shipping, and taxes.
   */
  subtotalPriceV2: ShoppingCartUpdateAddress_checkoutShippingAddressUpdateV2_checkout_subtotalPriceV2;
  /**
   * The amount left to be paid. This is equal to the cost of the line items,
   * duties, taxes, and shipping, minus discounts and gift cards.
   */
  paymentDueV2: ShoppingCartUpdateAddress_checkoutShippingAddressUpdateV2_checkout_paymentDueV2;
  /**
   * The sum of all the prices of all the items in the checkout, including taxes and duties.
   */
  totalPriceV2: ShoppingCartUpdateAddress_checkoutShippingAddressUpdateV2_checkout_totalPriceV2;
  /**
   * Once a shipping rate is selected by the customer it's transitioned to a `shipping_line` object.
   */
  shippingLine: ShoppingCartUpdateAddress_checkoutShippingAddressUpdateV2_checkout_shippingLine | null;
  /**
   * States whether or not the fulfillment requires shipping.
   */
  requiresShipping: boolean;
  /**
   * The available shipping rates for this Checkout.
   * Should only be used when checkout `requiresShipping` is `true` and
   * the shipping address is valid.
   */
  availableShippingRates: ShoppingCartUpdateAddress_checkoutShippingAddressUpdateV2_checkout_availableShippingRates | null;
  /**
   * Whether taxes are included in the line item and shipping line prices.
   */
  taxesIncluded: boolean;
}

export interface ShoppingCartUpdateAddress_checkoutShippingAddressUpdateV2 {
  __typename: 'CheckoutShippingAddressUpdateV2Payload';
  /**
   * The list of errors that occurred from executing the mutation.
   */
  checkoutUserErrors: ShoppingCartUpdateAddress_checkoutShippingAddressUpdateV2_checkoutUserErrors[];
  /**
   * The updated checkout object.
   */
  checkout: ShoppingCartUpdateAddress_checkoutShippingAddressUpdateV2_checkout | null;
}

export interface ShoppingCartUpdateAddress {
  /**
   * Updates the shipping address of an existing checkout.
   */
  checkoutShippingAddressUpdateV2: ShoppingCartUpdateAddress_checkoutShippingAddressUpdateV2 | null;
}

export interface ShoppingCartUpdateAddressVariables {
  checkoutId: string;
  shippingAddress: MailingAddressInput;
}
