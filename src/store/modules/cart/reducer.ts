import { Reducer } from 'redux';
import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import produce from 'immer';
import ICartState, { ActionTypes } from './types';

const INITIAL_STATE: ICartState = {
  items: [],
  failedStockCheck: [],
};
const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.AddProductToCartRequest: {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(
          item => item.product.id === product.id,
        );

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }

        break;
      }
      case ActionTypes.AddProductToCartFailure: {
        const { productId } = action.payload;
        draft.failedStockCheck.push(productId);
        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default cart;
