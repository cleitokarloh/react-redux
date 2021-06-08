import { ActionTypes, IProduct } from './types';

export function AddProductToCartRequest(product: IProduct) {
  return {
    type: ActionTypes.AddProductToCartRequest,
    payload: {
      product,
    },
  };
}
export function AddProductToCartSuccess(products: IProduct) {
  return {
    type: ActionTypes.AddProductToCartSuccess,
    payload: {
      products,
    },
  };
}
export function AddProductToCartFailure(productId: number) {
  return {
    type: ActionTypes.AddProductToCartFailure,
    payload: {
      productId,
    },
  };
}
