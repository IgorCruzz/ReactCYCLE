export interface IProductDTO {
  id?: number;
  name: string;
  price: number;
  avatar?: number;
  category: string;
  quantity: number;
  avatar_url?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface IProductList {
  readonly id: number;
  readonly name: string;
  readonly price: number;
  readonly quantity: number;
  readonly avatar_url: string;
}

export interface IParamData {
  category?: string;
  page?: number;
  min?: number;
  max?: number;
}
