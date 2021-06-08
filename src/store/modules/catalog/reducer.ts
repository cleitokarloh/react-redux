import { AxiosResponse } from 'axios';
import { Reducer } from 'redux';
import produce from 'immer';
import { IProduct, ActionTypes, ICatalogState } from './types';

const INITIAL_STATE: ICatalogState = {
  items: [],
  error: false,
  loading: true,
};

const catalog: Reducer<ICatalogState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.ListCatalogProducts: {
        draft.items = action.payload.products;
        draft.error = false;
        break;
      }
      case ActionTypes.ListCatalogProductsError: {
        draft.error = true;
        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default catalog;
