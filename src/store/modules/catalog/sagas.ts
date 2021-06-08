import { AxiosResponse } from 'axios';
import {
  all,
  takeLatest,
  select,
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';

import api from '../../../services/api';
import { ListCatalogProducts, ListCatalogProductsError } from './actions';
import { ActionTypes, IProduct } from './types';

function* getCatalog() {
  try {
    const catalog: AxiosResponse<IProduct[]> = yield call(api.get, `/products`);
    yield put(ListCatalogProducts(catalog.data));
  } catch (err) {
    yield put(ListCatalogProductsError());
  }
}

export default all([
  takeLatest(ActionTypes.ListCatalogProductsRequest, getCatalog),
]);
