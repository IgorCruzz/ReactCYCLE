import { User } from '../user.entity';

describe('User', () => {
  it('should be able to create an user with no fields', () => {
    const user = new User();

    expect(user.name).toBe(''),
      expect(user.email).toBe(''),
      expect(user.password).toBe(''),
      expect(user.cpf).toBe(''),
      expect(user.cnpj).toBe(''),
      expect(user.companyName).toBe(''),
      expect(user.stateRegistration).toBe(''),
      expect(user.phone).toBe(''),
      expect(user.gender).toBe(''),
      expect(user.administrator).toBe(false),
      expect(user.active).toBe(false),
      expect(user.birth).toBe(NaN),
      expect(user.cep).toBe(''),
      expect(user.address).toBe(''),
      expect(user.number).toBe(NaN),
      expect(user.complement).toBe(''),
      expect(user.referency).toBe(''),
      expect(user.neighborhood).toBe(''),
      expect(user.city).toBe(''),
      expect(user.state).toBe('');
  });

  it('should be able to create an User', () => {
    expect(
      new User({
        id: 1,
        name: 'name',
        email: 'email@gmail.com',
        password: '123456789',
        cpf: '15115484488',
        cnpj: '187448448888',
        companyName: 'companyName',
        stateRegistration: 'stateRegistration',
        phone: '2199699999',
        gender: 'M',
        administrator: true,
        active: true,
        birth: 201511111,
        cep: '151555-96',
        address: 'address',
        number: 973,
        complement: 'complement',
        referency: 'referency',
        neighborhood: 'neighborhood',
        city: 'city',
        state: 'state',
        created_at: new Date(),
        updated_at: new Date(),
      }),
    ).toContainKeys([
      'active',
      'address',
      'administrator',
      'birth',
      'cep',
      'city',
      'cnpj',
      'companyName',
      'complement',
      'cpf',
      'created_at',
      'email',
      'gender',
      'id',
      'name',
      'neighborhood',
      'neighborhood',
      'number',
      'password',
      'phone',
      'referency',
      'state',
      'stateRegistration',
      'updated_at',
    ]);
  });
});
