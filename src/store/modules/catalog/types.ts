export enum ActionTypes {
  ListCatalogProducts = 'LIST_CATALOG_PRODUCTS',
  ListCatalogProductsRequest = 'LIST_CATALOG_PRODUCTS_REQUEST',
  ListCatalogProductsError = 'LIST_CATALOG_PRODUCTS_ERROR',
}

export interface ICatalogState {
  items: IProduct[];
  error: boolean;
  loading: boolean;
}
export interface IProduct {
  id: number;
  title: string;
  price: number;
}
