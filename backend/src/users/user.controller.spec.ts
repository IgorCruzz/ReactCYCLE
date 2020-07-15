import { Test, TestingModule } from '@nestjs/testing'; 
import {  UsersController } from './users.controller'
import { IUserDTO } from './users.dto'
import { UsersService } from './users.service'  

const newUser = 
  { 
    id: 1,
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

describe('Cat Controller', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({    
      controllers: [UsersController],     
      providers: [
        {
          provide: UsersService,
          useValue: {
            store: jest.fn().mockResolvedValue(newUser),
            index: jest.fn().mockResolvedValue(newUser),
            show: jest.fn().mockResolvedValue(newUser),
            delete: jest.fn().mockResolvedValue(true),
            update: jest.fn().mockResolvedValue(true)
          }
        }
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  }); 

  describe('User', () => {
    it('should be able to create an user', async () => {
      expect(await controller.store(newUser)).toEqual(newUser)     
    })
    it('should be able to delete an user', async () => {
      expect(await controller.delete(1)).toBeTruthy()
    })
    it('should be able to update an user data', async () => {
      expect(await controller.update(1, { name: 'igor'})).toBeTruthy()
    })
    it('should be able to show an certain user', async () => {
      expect(await controller.show(1)).toEqual(newUser)
    })
    it('should be able to show all users', async () => {
      expect(await controller.index()).toEqual(newUser)
    })
  })
 
});