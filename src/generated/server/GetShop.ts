/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import {
  CardBrand,
  CountryCode,
  CurrencyCode,
  DigitalWallet,
} from './globalTypes';

// ====================================================
// GraphQL query operation: GetShop
// ====================================================

export interface GetShop_shop_privacyPolicy {
  __typename: 'ShopPolicy';
  /**
   * A globally-unique ID.
   */
  id: string;
  /**
   * Policy’s title.
   */
  title: string;
  /**
   * Public URL to the policy.
   */
  url: any;
}

export interface GetShop_shop_termsOfService {
  __typename: 'ShopPolicy';
  /**
   * A globally-unique ID.
   */
  id: string;
  /**
   * Policy’s title.
   */
  title: string;
  /**
   * Public URL to the policy.
   */
  url: any;
}

export interface GetShop_shop_paymentSettings {
  __typename: 'PaymentSettings';
  /**
   * List of the card brands which the shop accepts.
   */
  acceptedCardBrands: CardBrand[];
  /**
   * The url pointing to the endpoint to vault credit cards.
   */
  cardVaultUrl: any;
  /**
   * The country where the shop is located.
   */
  countryCode: CountryCode;
  /**
   * The three-letter code for the shop's primary currency.
   */
  currencyCode: CurrencyCode;
  /**
   * A list of enabled currencies (ISO 4217 format) that the shop accepts.
   * Merchants can enable currencies from their Shopify Payments settings in the Shopify admin.
   */
  enabledPresentmentCurrencies: CurrencyCode[];
  /**
   * List of the digital wallets which the shop supports.
   */
  supportedDigitalWallets: DigitalWallet[];
  /**
   * The shop’s Shopify Payments account ID.
   */
  shopifyPaymentsAccountId: string | null;
}

export interface GetShop_shop {
  __typename: 'Shop';
  /**
   * The shop’s name.
   */
  name: string;
  /**
   * The shop’s privacy policy.
   */
  privacyPolicy: GetShop_shop_privacyPolicy | null;
  /**
   * The shop’s terms of service.
   */
  termsOfService: GetShop_shop_termsOfService | null;
  /**
   * Settings related to payments.
   */
  paymentSettings: GetShop_shop_paymentSettings;
  /**
   * Countries that the shop ships to.
   */
  shipsToCountries: CountryCode[];
  /**
   * A string representing the way currency is formatted when the currency isn’t specified.
   */
  moneyFormat: string;
  /**
   * A description of the shop.
   */
  description: string | null;
}

export interface GetShop {
  /**
   * The shop associated with the storefront access token.
   */
  shop: GetShop_shop;
}
