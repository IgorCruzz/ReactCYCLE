import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from '../entities/user.entity'
import { Token } from '../entities/token.entity'
import * as bcrypt from 'bcrypt'

const userMock = new User({ 
  id: 1,
  name: 'nome de usuario',
  email: 'izone@gmail.com', 
  password: bcrypt.hashSync('123456789', 8),  
})

const userMock2 = new User({ 
  id: 2,
  name: 'nome de usuario',
  email: 'izone@gmail.com', 
  password: bcrypt.hashSync('123456789', 8),  
})

const newUser = new User(
  { 
    name: "isscruz",
    email: "dsdwdws@gmail.com",
    password: "123456789",
    cpf: '17518591878',
    phone: '99999999999',
    gender: "masculino",
    birth: 09031993,
    cep: '2545455',
    address: "rua dr oliveira",
    number: 819,
    complement: "fundos",
    referency: "em frente a um escadao",
    neighborhood: "barra do imbui",
    city: "teresopolis",
    state: "RJ" 
  }
)

const manyUsers = [userMock, userMock2]
 

describe('UsersService', () => {
  let service: UsersService;
  let userRepo: Repository<User>
  let tokenRepo: Repository<Token>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService,
      {
        provide: getRepositoryToken(User),
        useValue: {
          findOne: jest.fn().mockResolvedValue(userMock),
          delete: jest.fn().mockReturnValue(true),
          save: jest.fn().mockReturnValue(newUser),
          find: jest.fn().mockResolvedValue(manyUsers),
          update: jest.fn().mockReturnValue(true)
        }
      },
    {
      provide: getRepositoryToken(Token),
      useValue: {
        save: jest.fn()
      }
    }],
    }).compile();

    service = module.get<UsersService>(UsersService);
    userRepo = module.get<Repository<User>>(getRepositoryToken(User))
    tokenRepo = module.get<Repository<Token>>(getRepositoryToken(Token))
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findOne', () => {

    it('should be possible to get an user', async () => {
      expect(await service.show(userMock.id)).toEqual(userMock)        
    })

    it('should be possible to get all user', async () => {
      expect(await service.index()).toEqual(manyUsers)        
    })

    it('should be delete an user', async () => {
      expect(await service.delete(1)).toBe(true)
    })

    it('should be update an user data', async () => {
      expect(await service.update(1, { email: 'ladygaga@gmail.com'})).toBe(true)
    })

    it('should be create an user', async () => {
      expect(await service.store({ 
        name: "isscruz",
        email: "dsdwdws@gmail.com",
        password: "123456789",
        cpf: 17518591878,
        phone: 99999999999,
        gender: "masculino",
        birth: "09031993",
        cep: 2545455,
        address: "rua dr oliveira",
        number: 819,
        complement: "fundos",
        referency: "em frente a um escadao",
        neighborhood: "barra do imbui",
        city: "teresopolis",
        state: "RJ" 
      })).toEqual(newUser)
    })
  })
});
