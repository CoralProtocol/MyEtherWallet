const BityCurrencies = {
  BTC: {
    symbol: 'BTC',
    name: 'Bitcoin',
    invalidFrom: ['REP']
  },
  ETH: {
    symbol: 'ETH',
    name: 'Ether'
  },
  REP: {
    symbol: 'REP',
    name: 'Augur'
  }
};

const bityFiatCurrencies = [
  { symbol: 'CHF', name: 'Swiss Franc' },
  { symbol: 'USD', name: 'US Dollar' },
  { symbol: 'EUR', name: 'Euro' }
];

const bityMethods = {
  createTransaction: 'createTransaction',
  status: 'getStatus'
};

const bityRateEndpoint = 'https://bity.com/api/v1/rate2/';

const BITY_MIN = 0.01;
const BITY_MAX = 3;
const BITY_DECIMALS = 6;
const PROVIDER_NAME = 'bity';

export {
  BityCurrencies,
  bityRateEndpoint,
  bityMethods,
  bityFiatCurrencies,
  PROVIDER_NAME,
  BITY_MIN,
  BITY_MAX,
  BITY_DECIMALS
};
