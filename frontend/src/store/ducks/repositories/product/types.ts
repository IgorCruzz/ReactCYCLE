export enum RepositoriesTypes {
  PRODUCT_STORE_REQUEST = '@product/STORE_REQUEST',
  PRODUCT_STORE_FAILURE = '@product/STORE_FAILURE',
  PRODUCT_STORE_SUCCESS = '@product/STORE_SUCCESS'
}

export interface Product {
  name: string,
  price: number,
  quantity: string,
  category: string,
  avatar: string,
}
