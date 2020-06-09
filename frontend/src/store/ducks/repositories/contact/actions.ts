import { action } from 'typesafe-actions'
import { RepositoriesTypes, Contact } from './types'

export const contactRequest = (data: Contact) => action(RepositoriesTypes.REQUEST_CONTACT, { data })
