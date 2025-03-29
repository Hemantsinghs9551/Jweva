/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SetRecentSearch
// ====================================================

export interface SetRecentSearch_setRecentSearch {
  __typename: 'SearchDetail';
  title: string;
}

export interface SetRecentSearch {
  setRecentSearch: (SetRecentSearch_setRecentSearch | null)[];
}

export interface SetRecentSearchVariables {
  search: string;
}
