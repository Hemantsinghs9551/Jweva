/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CurrencyCode, CountryCode, UnitSystem } from './globalTypes';

// ====================================================
// GraphQL query operation: GetLocalization
// ====================================================

export interface GetLocalization_localization_availableCountries_currency {
  __typename: 'Currency';
  /**
   * The ISO code of the currency.
   */
  isoCode: CurrencyCode;
  /**
   * The name of the currency.
   */
  name: string;
  /**
   * The symbol of the currency.
   */
  symbol: string;
}

export interface GetLocalization_localization_availableCountries {
  __typename: 'Country';
  /**
   * The currency of the country.
   */
  currency: GetLocalization_localization_availableCountries_currency;
  /**
   * The ISO code of the country.
   */
  isoCode: CountryCode;
  /**
   * The name of the country.
   */
  name: string;
  /**
   * The unit system used in the country.
   */
  unitSystem: UnitSystem;
}

export interface GetLocalization_localization_country_currency {
  __typename: 'Currency';
  /**
   * The ISO code of the currency.
   */
  isoCode: CurrencyCode;
  /**
   * The name of the currency.
   */
  name: string;
  /**
   * The symbol of the currency.
   */
  symbol: string;
}

export interface GetLocalization_localization_country {
  __typename: 'Country';
  /**
   * The currency of the country.
   */
  currency: GetLocalization_localization_country_currency;
  /**
   * The ISO code of the country.
   */
  isoCode: CountryCode;
  /**
   * The name of the country.
   */
  name: string;
  /**
   * The unit system used in the country.
   */
  unitSystem: UnitSystem;
}

export interface GetLocalization_localization {
  __typename: 'Localization';
  /**
   * The list of countries with enabled localized experiences.
   */
  availableCountries: GetLocalization_localization_availableCountries[];
  /**
   * The country of the active localized experience. Use the `@inContext` directive to change this value.
   */
  country: GetLocalization_localization_country;
}

export interface GetLocalization {
  /**
   * Returns the localized experiences configured for the shop.
   */
  localization: GetLocalization_localization;
}
