export interface IContactDTO {
  id?: number;
  name: string;
  email: string;
  phone: string;
  order: string;
  message: string;
  created_at?: Date;
  updated_at?: Date;
}
