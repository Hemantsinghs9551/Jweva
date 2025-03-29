/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: InitiatePasswordReset
// ====================================================

export interface InitiatePasswordReset_customerRecover_customerUserErrors {
  __typename: 'CustomerUserError';
  /**
   * The error message.
   */
  message: string;
}

export interface InitiatePasswordReset_customerRecover {
  __typename: 'CustomerRecoverPayload';
  /**
   * The list of errors that occurred from executing the mutation.
   */
  customerUserErrors: InitiatePasswordReset_customerRecover_customerUserErrors[];
}

export interface InitiatePasswordReset {
  /**
   * Sends a reset password email to the customer. The reset password
   * email contains a reset password URL and token that you can pass to
   * the [`customerResetByUrl`](https:                        // shopify.dev/api/storefront/latest/mutations/customerResetByUrl) or
   * [`customerReset`](https:                                 // shopify.dev/api/storefront/latest/mutations/customerReset) mutation to reset the
   * customer password.
   *
   * This mutation is throttled by IP. With private access,
   * you can provide a [`Shopify-Storefront-Buyer-IP`](https: // shopify.dev/api/usage/authentication#optional-ip-header)
   * instead of the request IP.
   * The header is case-sensitive and must be sent as `Shopify-Storefront-Buyer-IP`.
   *
   * Make sure that the value provided to `Shopify-Storefront-Buyer-IP` is trusted. Unthrottled access to this
   * mutation presents a security risk.
   */
  customerRecover: InitiatePasswordReset_customerRecover | null;
}

export interface InitiatePasswordResetVariables {
  email: string;
}
