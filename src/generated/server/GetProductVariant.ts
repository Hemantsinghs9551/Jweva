/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { SelectedOptionInput, CountryCode, CurrencyCode } from './globalTypes';

// ====================================================
// GraphQL query operation: GetProductVariant
// ====================================================

export interface GetProductVariant_productByHandle_variantBySelectedOptions_compareAtPriceV2 {
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

export interface GetProductVariant_productByHandle_variantBySelectedOptions_priceV2 {
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

export interface GetProductVariant_productByHandle_variantBySelectedOptions {
  __typename: 'ProductVariant';
  /**
   * A globally-unique ID.
   */
  id: string;
  /**
   * Indicates if the product variant is available for sale.
   */
  availableForSale: boolean;
  /**
   * The total sellable quantity of the variant for online sales channels.
   */
  quantityAvailable: number | null;
  /**
   * The compare at price of the variant. This can be used to mark a variant as on
   * sale, when `compareAtPriceV2` is higher than `priceV2`.
   */
  compareAtPriceV2: GetProductVariant_productByHandle_variantBySelectedOptions_compareAtPriceV2 | null;
  /**
   * The product variant’s price.
   */
  priceV2: GetProductVariant_productByHandle_variantBySelectedOptions_priceV2;
}

export interface GetProductVariant_productByHandle {
  __typename: 'Product';
  /**
   * A globally-unique ID.
   */
  id: string;
  /**
   * Find a product’s variant based on its selected options.
   * This is useful for converting a user’s selection of product options into a single matching variant.
   * If there is not a variant for the selected options, `null` will be returned.
   */
  variantBySelectedOptions: GetProductVariant_productByHandle_variantBySelectedOptions | null;
}

export interface GetProductVariant {
  /**
   * Find a product by its handle.
   */
  productByHandle: GetProductVariant_productByHandle | null;
}

export interface GetProductVariantVariables {
  selectedOptions: SelectedOptionInput[];
  handle: string;
  country: CountryCode;
}
