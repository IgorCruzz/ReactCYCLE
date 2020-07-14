import { Product } from './product.entity' 

describe('Product Entity', () => {
  it('should be possible register and product with no fields', () => {
    const product = new Product()
    expect(product).toBeTruthy()
    expect(product.id).toBe(NaN)
    expect(product.name).toBe('')
    expect(product.quantity).toBe(NaN)
    expect(product.price).toBe(NaN)
    expect(product.avatar).toBe(NaN)
    expect(product.category).toBe('')
    expect(product.created_at).toBeInstanceOf(Date)
    expect(product.updated_at).toBeInstanceOf(Date)
  })
}) 

 