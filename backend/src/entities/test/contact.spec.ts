import { Contact } from '../contact.entity'


describe('Contact', () => {
  it('should be able to create a contact with no fields', () => {
    const contact = new Contact()

    expect(contact.id).toBe(NaN)
    expect(contact.name).toBe('')
    expect(contact.message).toBe('')
    expect(contact.order).toBe('')
    expect(contact.phone).toBe('')
    expect(contact.created_at).toBeInstanceOf(Date)
    expect(contact.updated_at).toBeInstanceOf(Date)

  })

  it('should be able to create a contact', () => {
    expect(new Contact({
      id: 1,
      name: 'username',
      email: 'email',
      order: '1',
      phone: '123456789',
      message: 'message'
    })).toContainKeys(['id', 'name', 'email', 'order', 'phone', 'message', 'created_at', 'updated_at'])
  })
})
