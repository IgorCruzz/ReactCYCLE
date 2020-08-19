export enum RepositoriesTypes {
  REQUEST_CONTACT = '@contact/REQUEST_CONTACT'
}

export interface Contact {
  name: string,
  email: string,
  phone: string,
  order: string
  message: string,

}
