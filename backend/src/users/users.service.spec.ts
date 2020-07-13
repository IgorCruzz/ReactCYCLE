import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from '../entities/user.entity'
import { Token } from '../entities/token.entity'
import * as bcrypt from 'bcrypt'
import * as crypto from 'crypto'

const userMock = new User({ 
  id: 1,
  name: 'user one',
  email: 'userone@gmail.com', 
  password: bcrypt.hashSync('123456789', 8),
  cpf: '17518591878',
  phone: '99999999999',
  gender: "masculino",
  birth: 19031993,
  cep: '2545455',
  address: "rua dr oliveira",
  number: 819,
  complement: "fundos",
  referency: "em frente a um escadao",
  neighborhood: "barra do imbui",
  city: "teresopolis",
  state: "RJ"   
})

const userMock2 = new User({ 
  id: 2,
  name: 'user two',
  email: 'usertwo@gmail.com', 
  password: bcrypt.hashSync('123456789', 8),
  cpf: '17518591878',
  phone: '99999999999',
  gender: "masculino",
  birth: 19031993,
  cep: '2545455',
  address: "rua dr oliveira",
  number: 819,
  complement: "fundos",
  referency: "em frente a um escadao",
  neighborhood: "barra do imbui",
  city: "teresopolis",
  state: "RJ"   
})

const newUser = new User(
  { 
    name: "new user",
    email: "newuser@gmail.com",
    password: "123456789",
    cpf: '17518591878',
    phone: '99999999999',
    gender: "masculino",
    birth: 19031993,
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

  describe('show', () => {

    it('should be possible to get an user', async () => {
      expect(await service.show(userMock.id)).toEqual(userMock)        
    })

  })

  describe('index', () => {
    
    it('should be possible to get all user', async () => {
      expect(await service.index()).toEqual(manyUsers)        
    })

  })

  describe('delete', () => {

    it('should be delete an user', async () => {
      expect(await service.delete(1)).toBe(true)
    })

  })

   

    describe('update', () => {
      it('should be update an user data', async () => {
        expect(await service.update(1, { email: 'email@gmail.com'})).toBeTruthy()
      })
      
      it('throw an error if email has been incorrect format', async () => {
        try {
          await service.update(1, { email: 'incorrectEmail'}) 
        } catch (err){
          expect(err.message).toEqual('Http Exception')
        }        
      })

      it('throw an error if password has less than 6 characters', async () => {
        try {
          await service.update(1, { password: '123 '})
        } catch(err){
          expect(err.message).toEqual('Http Exception')
        }
      })

      it('throw an error is username has less than 5 characters', async () => {
        try {
          await service.update(1, { name: 'name'})
        } catch (err){
          expect(err.message).toEqual('Http Exception')
        }
      })

    })
    

    describe('store', () => {
      it('should be create an user', async () => {
        jest.spyOn(userRepo, 'findOne').mockResolvedValue(undefined)        
  
        expect(await service.store({ 
          id: 1,
          name: 'user one',
          email: 'userone@gmail.com', 
          confirmEmail: 'userone@gmail.com',
          password: '123456789',
          confirmPassword: '123456789',
          cpf: '17518591878',
          phone: '99999999999',
          gender: "masculino",
          birth: 19031993,
          cep: '2545455',
          address: "rua dr oliveira",
          number: 819,
          complement: "fundos",
          referency: "em frente a um escadao",
          neighborhood: "barra do imbui",
          city: "teresopolis",
          state: "RJ"   
        })).toEqual(newUser)
      })
    

      it('throw an error if already exists an user with email that passed on request', async () => {
        try { 
          await service.store({ 
            id: 1,
            name: 'user one',
            email: 'userone@gmail.com', 
            confirmEmail: 'userone@gmail.com',
            password: '123456789',
            confirmPassword: '123456789',
            cpf: '17518591878',
            phone: '99999999999',
            gender: "masculino",
            birth: 19031993,
            cep: '2545455',
            address: "rua dr oliveira",
            number: 819,
            complement: "fundos",
            referency: "em frente a um escadao",
            neighborhood: "barra do imbui",
            city: "teresopolis",
            state: "RJ"   
          })
        } catch(err){
          expect(err.message).toEqual('Http Exception')
        }
      })
      
      it('throw an error if any request body is incorrect', async () => {
        try {
          await service.store( 
            { 
              name: "",
              email: "",
              password: "",
              cpf: '',
              phone: '',
              gender: "",
              birth: NaN,
              cep: '',
              address: "",
              number: NaN,
              complement: "",
              referency: "",
              neighborhood: "",
              city: "",
              state: "" 
            }
           )
        } catch(err){
          expect(err.message).toEqual('Http Exception')
        }

      })  

    })

  
 
});
