import { actions } from '../actions/currencies';

const initalState = {
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  amount: 100,
  conversions: {},
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actions.CHANGE_CURRENCY_AMOUNT:
      return {
        ...state,
        amount: action.amount || 0,
      };
    case actions.SWAP_CURRENCY:
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency,
      };
    default:
      return state;
  }
};

export default reducer;
