import { AxiosResponse } from 'axios';
import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import { IState } from '../..';
import api from '../../../services/api';
import {
  AddProductToCartFailure,
  AddProductToCartRequest,
  AddProductToCartSuccess,
} from './actions';
import { ActionTypes } from './types';

type CheckProductStockRequest = ReturnType<typeof AddProductToCartRequest>;
interface IStockResponse {
  id: number;
  quantity: number;
}

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload;
  const currentQuantity: number = yield select((state: IState) => {
    return (
      state.cart.items.find(item => item.product.id === product.id)?.quantity ??
      0
    );
  });

  const avaliableStockResponse: AxiosResponse<IStockResponse> = yield call(
    api.get,
    `stock/${product.id}`,
  );

  if (avaliableStockResponse.data.quantity > currentQuantity) {
    yield put(AddProductToCartSuccess(product));
  } else {
    yield put(AddProductToCartFailure(product.id));
  }

  console.log(currentQuantity);

  console.log('Adicionou ao carrinho!');
}

export default all([ActionTypes.AddProductToCartRequest]);
