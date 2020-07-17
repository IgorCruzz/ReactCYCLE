import { Product } from '../product.entity';
import { Avatar } from '../avatar.entity';

describe('Product', () => {
  it('should be able to create a product with no fields', () => {
    const product = new Product();

    expect(product.id).toBe(NaN);
    expect(product.name).toBe('');
    expect(product.price).toBe(NaN);
    expect(product.quantity).toBe(NaN);
    expect(product.category).toBe('');
    expect(product.avatar).toBe(NaN);
    expect(product.avatar_data).toBe(null);
    expect(product.created_at).toBeInstanceOf(Date);
    expect(product.updated_at).toBeInstanceOf(Date);
  });

  it('should be able to create a Product', () => {
    const avatar = new Avatar({
      id: 1,
      name: 'name',
      url: 'http://example/file/name',
    });

    expect(
      new Product({
        id: 1,
        name: 'product',
        price: 59,
        quantity: 1,
        category: 'category',
        avatar: avatar.id,
        avatar_data: avatar,
      }),
    ).toContainKeys([
      'id',
      'name',
      'quantity',
      'category',
      'avatar',
      'avatar_data',
      'created_at',
      'updated_at',
    ]);
  });
});
