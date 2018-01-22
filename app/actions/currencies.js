export const actions = {
  SWAP_CURRENCY: 'SWAP_CURRENCY',
  CHANGE_CURRENCY_AMOUNT: 'CHANGE_CURRENCY_AMOUNT',
  CHANGE_BASE_CURRENCY: 'CHANGE_BASE_CURRENCY',
  CHANGE_QUOTE_CURRENCY: 'CHANGE_QUOTE_CURRENCY',
};

export const swapCurrency = () => ({
  type: actions.SWAP_CURRENCY,
});

export const changeCurrencyAmount = amount => ({
  type: actions.CHANGE_CURRENCY_AMOUNT,
  amount: parseFloat(amount),
});

export const changeBaseCurrency = currency => ({
  type: actions.CHANGE_BASE_CURRENCY,
  currency,
});

export const changeQuoteCurrency = currency => ({
  type: actions.CHANGE_QUOTE_CURRENCY,
  currency,
});
