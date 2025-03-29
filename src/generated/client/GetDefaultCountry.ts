/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetDefaultCountry
// ====================================================

export interface GetDefaultCountry_defaultCountry {
  __typename: 'DefaultCountry';
  countryCode: string;
  currencyCode: string;
  currencySymbol: string;
}

export interface GetDefaultCountry {
  defaultCountry: GetDefaultCountry_defaultCountry;
}
