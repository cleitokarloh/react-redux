import { ActionTypes, IProduct } from './types';

export function ListCatalogProducts(products: IProduct[]) {
  return {
    type: ActionTypes.ListCatalogProducts,
    payload: {
      products,
    },
  };
}

export function ListCatalogProductsRequest() {
  return {
    type: ActionTypes.ListCatalogProductsRequest,
  };
}

export function ListCatalogProductsError() {
  return {
    type: ActionTypes.ListCatalogProductsError,
  };
}
