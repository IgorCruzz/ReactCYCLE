import { Contact } from './contact.entity'

describe('Contact', () => {
  it('should be create and contact with no fields', () => {
    const contact = new Contact()
    expect(contact).toBeTruthy()
    expect(contact.id).toBe(NaN)
    expect(contact.name).toBe('')
    expect(contact.email).toBe('')
    expect(contact.message).toBe('')
    expect(contact.order).toBe('')
    expect(contact.phone).toBe('')
    expect(contact.created_at).toBeInstanceOf(Date)
    expect(contact.updated_at).toBeInstanceOf(Date)
  })
})