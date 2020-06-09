export enum RepositoriesTypes {
  ADD_PRODUCT = '@cart/ADD_PRODUCT',
  REMOVE_PRODUCT = '@cart/REMOVE_PRODUCT',
  INCREMENT_AMOUNT = '@cart/INCREMENT_AMOUMT',
  DECREMENT_AMOUNT = '@cart/DECREMENT_AMOUNT'
}

export interface Cart {
  id: number,
  avatar_url: string,
  price: number,
  name: string,
  quantity: number
}
