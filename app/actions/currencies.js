export const actions = {
  SWAP_CURRENCY: 'SWAP_CURRENCY',
  CHANGE_CURRENCY_AMOUNT: 'CHANGE_CURRENCY_AMOUNT',
};

export const swapCurrency = () => ({
  type: actions.SWAP_CURRENCY,
});

export const changeCurrencyAmount = amount => ({
  type: actions.CHANGE_CURRENCY_AMOUNT,
  amount: parseFloat(amount),
});
