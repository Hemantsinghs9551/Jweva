/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SetDefaultCountry
// ====================================================

export interface SetDefaultCountry_setDefaultCountry {
  __typename: 'DefaultCountry';
  countryCode: string;
  currencyCode: string;
  currencySymbol: string;
}

export interface SetDefaultCountry {
  setDefaultCountry: SetDefaultCountry_setDefaultCountry;
}

export interface SetDefaultCountryVariables {
  countryCode: string;
  currencyCode: string;
  currencySymbol: string;
}
