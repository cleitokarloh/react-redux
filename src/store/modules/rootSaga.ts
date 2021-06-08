import { all } from 'redux-saga/effects';
import cart from './cart/sagas';
import catalog from './catalog/sagas';

export default function* rootSaga() {
  return yield all([cart, catalog]);
}
