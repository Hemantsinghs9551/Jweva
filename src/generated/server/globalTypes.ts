/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * Card brand, such as Visa or Mastercard, which can be used for payments.
 */
export enum CardBrand {
  AMERICAN_EXPRESS = 'AMERICAN_EXPRESS',
  DINERS_CLUB = 'DINERS_CLUB',
  DISCOVER = 'DISCOVER',
  JCB = 'JCB',
  MASTERCARD = 'MASTERCARD',
  VISA = 'VISA',
}

/**
 * Possible error codes that can be returned by `CheckoutUserError`.
 */
export enum CheckoutErrorCode {
  ALREADY_COMPLETED = 'ALREADY_COMPLETED',
  BAD_DOMAIN = 'BAD_DOMAIN',
  BLANK = 'BLANK',
  CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE = 'CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE',
  CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE = 'CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE',
  DISCOUNT_ALREADY_APPLIED = 'DISCOUNT_ALREADY_APPLIED',
  DISCOUNT_CODE_APPLICATION_FAILED = 'DISCOUNT_CODE_APPLICATION_FAILED',
  DISCOUNT_DISABLED = 'DISCOUNT_DISABLED',
  DISCOUNT_EXPIRED = 'DISCOUNT_EXPIRED',
  DISCOUNT_LIMIT_REACHED = 'DISCOUNT_LIMIT_REACHED',
  DISCOUNT_NOT_FOUND = 'DISCOUNT_NOT_FOUND',
  EMPTY = 'EMPTY',
  EXPIRED_QUEUE_TOKEN = 'EXPIRED_QUEUE_TOKEN',
  GIFT_CARD_ALREADY_APPLIED = 'GIFT_CARD_ALREADY_APPLIED',
  GIFT_CARD_CODE_INVALID = 'GIFT_CARD_CODE_INVALID',
  GIFT_CARD_CURRENCY_MISMATCH = 'GIFT_CARD_CURRENCY_MISMATCH',
  GIFT_CARD_DEPLETED = 'GIFT_CARD_DEPLETED',
  GIFT_CARD_DISABLED = 'GIFT_CARD_DISABLED',
  GIFT_CARD_EXPIRED = 'GIFT_CARD_EXPIRED',
  GIFT_CARD_NOT_FOUND = 'GIFT_CARD_NOT_FOUND',
  GIFT_CARD_UNUSABLE = 'GIFT_CARD_UNUSABLE',
  GREATER_THAN_OR_EQUAL_TO = 'GREATER_THAN_OR_EQUAL_TO',
  HIGHER_VALUE_DISCOUNT_APPLIED = 'HIGHER_VALUE_DISCOUNT_APPLIED',
  INVALID = 'INVALID',
  INVALID_COUNTRY_AND_CURRENCY = 'INVALID_COUNTRY_AND_CURRENCY',
  INVALID_FOR_COUNTRY = 'INVALID_FOR_COUNTRY',
  INVALID_FOR_COUNTRY_AND_PROVINCE = 'INVALID_FOR_COUNTRY_AND_PROVINCE',
  INVALID_PROVINCE_IN_COUNTRY = 'INVALID_PROVINCE_IN_COUNTRY',
  INVALID_QUEUE_TOKEN = 'INVALID_QUEUE_TOKEN',
  INVALID_REGION_IN_COUNTRY = 'INVALID_REGION_IN_COUNTRY',
  INVALID_STATE_IN_COUNTRY = 'INVALID_STATE_IN_COUNTRY',
  LESS_THAN = 'LESS_THAN',
  LESS_THAN_OR_EQUAL_TO = 'LESS_THAN_OR_EQUAL_TO',
  LINE_ITEM_NOT_FOUND = 'LINE_ITEM_NOT_FOUND',
  LOCKED = 'LOCKED',
  MAXIMUM_DISCOUNT_CODE_LIMIT_REACHED = 'MAXIMUM_DISCOUNT_CODE_LIMIT_REACHED',
  MISSING_PAYMENT_INPUT = 'MISSING_PAYMENT_INPUT',
  NOT_ENOUGH_IN_STOCK = 'NOT_ENOUGH_IN_STOCK',
  NOT_SUPPORTED = 'NOT_SUPPORTED',
  PRESENT = 'PRESENT',
  PRODUCT_NOT_AVAILABLE = 'PRODUCT_NOT_AVAILABLE',
  SHIPPING_RATE_EXPIRED = 'SHIPPING_RATE_EXPIRED',
  THROTTLED_DURING_CHECKOUT = 'THROTTLED_DURING_CHECKOUT',
  TOO_LONG = 'TOO_LONG',
  TOTAL_PRICE_MISMATCH = 'TOTAL_PRICE_MISMATCH',
  UNABLE_TO_APPLY = 'UNABLE_TO_APPLY',
}

/**
 * The code designating a country/region, which generally follows ISO 3166-1 alpha-2 guidelines.
 * If a territory doesn't have a country code value in the `CountryCode` enum, then it might be considered a subdivision
 * of another country. For example, the territories associated with Spain are represented by the country code `ES`,
 * and the territories associated with the United States of America are represented by the country code `US`.
 */
export enum CountryCode {
  AC = 'AC',
  AD = 'AD',
  AE = 'AE',
  AF = 'AF',
  AG = 'AG',
  AI = 'AI',
  AL = 'AL',
  AM = 'AM',
  AN = 'AN',
  AO = 'AO',
  AR = 'AR',
  AT = 'AT',
  AU = 'AU',
  AW = 'AW',
  AX = 'AX',
  AZ = 'AZ',
  BA = 'BA',
  BB = 'BB',
  BD = 'BD',
  BE = 'BE',
  BF = 'BF',
  BG = 'BG',
  BH = 'BH',
  BI = 'BI',
  BJ = 'BJ',
  BL = 'BL',
  BM = 'BM',
  BN = 'BN',
  BO = 'BO',
  BQ = 'BQ',
  BR = 'BR',
  BS = 'BS',
  BT = 'BT',
  BV = 'BV',
  BW = 'BW',
  BY = 'BY',
  BZ = 'BZ',
  CA = 'CA',
  CC = 'CC',
  CD = 'CD',
  CF = 'CF',
  CG = 'CG',
  CH = 'CH',
  CI = 'CI',
  CK = 'CK',
  CL = 'CL',
  CM = 'CM',
  CN = 'CN',
  CO = 'CO',
  CR = 'CR',
  CU = 'CU',
  CV = 'CV',
  CW = 'CW',
  CX = 'CX',
  CY = 'CY',
  CZ = 'CZ',
  DE = 'DE',
  DJ = 'DJ',
  DK = 'DK',
  DM = 'DM',
  DO = 'DO',
  DZ = 'DZ',
  EC = 'EC',
  EE = 'EE',
  EG = 'EG',
  EH = 'EH',
  ER = 'ER',
  ES = 'ES',
  ET = 'ET',
  FI = 'FI',
  FJ = 'FJ',
  FK = 'FK',
  FO = 'FO',
  FR = 'FR',
  GA = 'GA',
  GB = 'GB',
  GD = 'GD',
  GE = 'GE',
  GF = 'GF',
  GG = 'GG',
  GH = 'GH',
  GI = 'GI',
  GL = 'GL',
  GM = 'GM',
  GN = 'GN',
  GP = 'GP',
  GQ = 'GQ',
  GR = 'GR',
  GS = 'GS',
  GT = 'GT',
  GW = 'GW',
  GY = 'GY',
  HK = 'HK',
  HM = 'HM',
  HN = 'HN',
  HR = 'HR',
  HT = 'HT',
  HU = 'HU',
  ID = 'ID',
  IE = 'IE',
  IL = 'IL',
  IM = 'IM',
  IN = 'IN',
  IO = 'IO',
  IQ = 'IQ',
  IR = 'IR',
  IS = 'IS',
  IT = 'IT',
  JE = 'JE',
  JM = 'JM',
  JO = 'JO',
  JP = 'JP',
  KE = 'KE',
  KG = 'KG',
  KH = 'KH',
  KI = 'KI',
  KM = 'KM',
  KN = 'KN',
  KP = 'KP',
  KR = 'KR',
  KW = 'KW',
  KY = 'KY',
  KZ = 'KZ',
  LA = 'LA',
  LB = 'LB',
  LC = 'LC',
  LI = 'LI',
  LK = 'LK',
  LR = 'LR',
  LS = 'LS',
  LT = 'LT',
  LU = 'LU',
  LV = 'LV',
  LY = 'LY',
  MA = 'MA',
  MC = 'MC',
  MD = 'MD',
  ME = 'ME',
  MF = 'MF',
  MG = 'MG',
  MK = 'MK',
  ML = 'ML',
  MM = 'MM',
  MN = 'MN',
  MO = 'MO',
  MQ = 'MQ',
  MR = 'MR',
  MS = 'MS',
  MT = 'MT',
  MU = 'MU',
  MV = 'MV',
  MW = 'MW',
  MX = 'MX',
  MY = 'MY',
  MZ = 'MZ',
  NA = 'NA',
  NC = 'NC',
  NE = 'NE',
  NF = 'NF',
  NG = 'NG',
  NI = 'NI',
  NL = 'NL',
  NO = 'NO',
  NP = 'NP',
  NR = 'NR',
  NU = 'NU',
  NZ = 'NZ',
  OM = 'OM',
  PA = 'PA',
  PE = 'PE',
  PF = 'PF',
  PG = 'PG',
  PH = 'PH',
  PK = 'PK',
  PL = 'PL',
  PM = 'PM',
  PN = 'PN',
  PS = 'PS',
  PT = 'PT',
  PY = 'PY',
  QA = 'QA',
  RE = 'RE',
  RO = 'RO',
  RS = 'RS',
  RU = 'RU',
  RW = 'RW',
  SA = 'SA',
  SB = 'SB',
  SC = 'SC',
  SD = 'SD',
  SE = 'SE',
  SG = 'SG',
  SH = 'SH',
  SI = 'SI',
  SJ = 'SJ',
  SK = 'SK',
  SL = 'SL',
  SM = 'SM',
  SN = 'SN',
  SO = 'SO',
  SR = 'SR',
  SS = 'SS',
  ST = 'ST',
  SV = 'SV',
  SX = 'SX',
  SY = 'SY',
  SZ = 'SZ',
  TA = 'TA',
  TC = 'TC',
  TD = 'TD',
  TF = 'TF',
  TG = 'TG',
  TH = 'TH',
  TJ = 'TJ',
  TK = 'TK',
  TL = 'TL',
  TM = 'TM',
  TN = 'TN',
  TO = 'TO',
  TR = 'TR',
  TT = 'TT',
  TV = 'TV',
  TW = 'TW',
  TZ = 'TZ',
  UA = 'UA',
  UG = 'UG',
  UM = 'UM',
  US = 'US',
  UY = 'UY',
  UZ = 'UZ',
  VA = 'VA',
  VC = 'VC',
  VE = 'VE',
  VG = 'VG',
  VN = 'VN',
  VU = 'VU',
  WF = 'WF',
  WS = 'WS',
  XK = 'XK',
  YE = 'YE',
  YT = 'YT',
  ZA = 'ZA',
  ZM = 'ZM',
  ZW = 'ZW',
  ZZ = 'ZZ',
}

/**
 * The three-letter currency codes that represent the world currencies used in
 * stores. These include standard ISO 4217 codes, legacy codes,
 * and non-standard codes.
 */
export enum CurrencyCode {
  AED = 'AED',
  AFN = 'AFN',
  ALL = 'ALL',
  AMD = 'AMD',
  ANG = 'ANG',
  AOA = 'AOA',
  ARS = 'ARS',
  AUD = 'AUD',
  AWG = 'AWG',
  AZN = 'AZN',
  BAM = 'BAM',
  BBD = 'BBD',
  BDT = 'BDT',
  BGN = 'BGN',
  BHD = 'BHD',
  BIF = 'BIF',
  BMD = 'BMD',
  BND = 'BND',
  BOB = 'BOB',
  BRL = 'BRL',
  BSD = 'BSD',
  BTN = 'BTN',
  BWP = 'BWP',
  BYN = 'BYN',
  BYR = 'BYR',
  BZD = 'BZD',
  CAD = 'CAD',
  CDF = 'CDF',
  CHF = 'CHF',
  CLP = 'CLP',
  CNY = 'CNY',
  COP = 'COP',
  CRC = 'CRC',
  CVE = 'CVE',
  CZK = 'CZK',
  DJF = 'DJF',
  DKK = 'DKK',
  DOP = 'DOP',
  DZD = 'DZD',
  EGP = 'EGP',
  ERN = 'ERN',
  ETB = 'ETB',
  EUR = 'EUR',
  FJD = 'FJD',
  FKP = 'FKP',
  GBP = 'GBP',
  GEL = 'GEL',
  GHS = 'GHS',
  GIP = 'GIP',
  GMD = 'GMD',
  GNF = 'GNF',
  GTQ = 'GTQ',
  GYD = 'GYD',
  HKD = 'HKD',
  HNL = 'HNL',
  HRK = 'HRK',
  HTG = 'HTG',
  HUF = 'HUF',
  IDR = 'IDR',
  ILS = 'ILS',
  INR = 'INR',
  IQD = 'IQD',
  IRR = 'IRR',
  ISK = 'ISK',
  JEP = 'JEP',
  JMD = 'JMD',
  JOD = 'JOD',
  JPY = 'JPY',
  KES = 'KES',
  KGS = 'KGS',
  KHR = 'KHR',
  KID = 'KID',
  KMF = 'KMF',
  KRW = 'KRW',
  KWD = 'KWD',
  KYD = 'KYD',
  KZT = 'KZT',
  LAK = 'LAK',
  LBP = 'LBP',
  LKR = 'LKR',
  LRD = 'LRD',
  LSL = 'LSL',
  LTL = 'LTL',
  LVL = 'LVL',
  LYD = 'LYD',
  MAD = 'MAD',
  MDL = 'MDL',
  MGA = 'MGA',
  MKD = 'MKD',
  MMK = 'MMK',
  MNT = 'MNT',
  MOP = 'MOP',
  MRU = 'MRU',
  MUR = 'MUR',
  MVR = 'MVR',
  MWK = 'MWK',
  MXN = 'MXN',
  MYR = 'MYR',
  MZN = 'MZN',
  NAD = 'NAD',
  NGN = 'NGN',
  NIO = 'NIO',
  NOK = 'NOK',
  NPR = 'NPR',
  NZD = 'NZD',
  OMR = 'OMR',
  PAB = 'PAB',
  PEN = 'PEN',
  PGK = 'PGK',
  PHP = 'PHP',
  PKR = 'PKR',
  PLN = 'PLN',
  PYG = 'PYG',
  QAR = 'QAR',
  RON = 'RON',
  RSD = 'RSD',
  RUB = 'RUB',
  RWF = 'RWF',
  SAR = 'SAR',
  SBD = 'SBD',
  SCR = 'SCR',
  SDG = 'SDG',
  SEK = 'SEK',
  SGD = 'SGD',
  SHP = 'SHP',
  SLL = 'SLL',
  SOS = 'SOS',
  SRD = 'SRD',
  SSP = 'SSP',
  STD = 'STD',
  STN = 'STN',
  SYP = 'SYP',
  SZL = 'SZL',
  THB = 'THB',
  TJS = 'TJS',
  TMT = 'TMT',
  TND = 'TND',
  TOP = 'TOP',
  TRY = 'TRY',
  TTD = 'TTD',
  TWD = 'TWD',
  TZS = 'TZS',
  UAH = 'UAH',
  UGX = 'UGX',
  USD = 'USD',
  UYU = 'UYU',
  UZS = 'UZS',
  VED = 'VED',
  VEF = 'VEF',
  VES = 'VES',
  VND = 'VND',
  VUV = 'VUV',
  WST = 'WST',
  XAF = 'XAF',
  XCD = 'XCD',
  XOF = 'XOF',
  XPF = 'XPF',
  XXX = 'XXX',
  YER = 'YER',
  ZAR = 'ZAR',
  ZMW = 'ZMW',
}

/**
 * Digital wallet, such as Apple Pay, which can be used for accelerated checkouts.
 */
export enum DigitalWallet {
  ANDROID_PAY = 'ANDROID_PAY',
  APPLE_PAY = 'APPLE_PAY',
  GOOGLE_PAY = 'GOOGLE_PAY',
  SHOPIFY_PAY = 'SHOPIFY_PAY',
}

/**
 * The set of valid sort keys for the ProductCollection query.
 */
export enum ProductCollectionSortKeys {
  BEST_SELLING = 'BEST_SELLING',
  COLLECTION_DEFAULT = 'COLLECTION_DEFAULT',
  CREATED = 'CREATED',
  ID = 'ID',
  MANUAL = 'MANUAL',
  PRICE = 'PRICE',
  RELEVANCE = 'RELEVANCE',
  TITLE = 'TITLE',
}

/**
 * The set of valid sort keys for the Product query.
 */
export enum ProductSortKeys {
  BEST_SELLING = 'BEST_SELLING',
  CREATED_AT = 'CREATED_AT',
  ID = 'ID',
  PRICE = 'PRICE',
  PRODUCT_TYPE = 'PRODUCT_TYPE',
  RELEVANCE = 'RELEVANCE',
  TITLE = 'TITLE',
  UPDATED_AT = 'UPDATED_AT',
  VENDOR = 'VENDOR',
}

/**
 * Systems of weights and measures.
 */
export enum UnitSystem {
  IMPERIAL_SYSTEM = 'IMPERIAL_SYSTEM',
  METRIC_SYSTEM = 'METRIC_SYSTEM',
}

/**
 * The input fields for an attribute.
 */
export interface AttributeInput {
  key: string;
  value: string;
}

/**
 * The input fields for the identity of the customer associated with the checkout.
 */
export interface CheckoutBuyerIdentityInput {
  countryCode: CountryCode;
}

/**
 * The input fields required to create a checkout.
 */
export interface CheckoutCreateInput {
  email?: string | null;
  lineItems?: CheckoutLineItemInput[] | null;
  shippingAddress?: MailingAddressInput | null;
  note?: string | null;
  customAttributes?: AttributeInput[] | null;
  allowPartialAddresses?: boolean | null;
  buyerIdentity?: CheckoutBuyerIdentityInput | null;
}

/**
 * The input fields to create a line item on a checkout.
 */
export interface CheckoutLineItemInput {
  customAttributes?: AttributeInput[] | null;
  quantity: number;
  variantId: string;
}

/**
 * The input fields to create or update a mailing address.
 */
export interface MailingAddressInput {
  address1?: string | null;
  address2?: string | null;
  city?: string | null;
  company?: string | null;
  country?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  province?: string | null;
  zip?: string | null;
}

/**
 * The input fields required for a selected option.
 */
export interface SelectedOptionInput {
  name: string;
  value: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
