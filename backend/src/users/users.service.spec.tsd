import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from '../entities/user.entity'
import { Token } from '../entities/token.entity'
import { getMockReq, getMockRes } from '@jest-mock/express'

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
          findOne: jest.fn(),
          delete: jest.fn(),
          save: jest.fn(),
          find: jest.fn(),
          update: jest.fn()
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
    it('should be possible to show an user', async () => {
      const req = getMockReq({
        params: 5
      })
      
      const { res } = getMockRes()

      await service.show(req, res)

      expect(userRepo.findOne).toBeCalledTimes(1)    
    })

    it('should be possible delete an user', async () => {
      const req = getMockReq({
        params: 5
      }) 

      const { res } = getMockRes()

      await service.delete(req, res)

      expect(userRepo.delete).toBeCalledTimes(1)
    })

    it('should be possible create an user', async () => {
      const req = getMockReq({
        body: {          
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
        }
      })

      const { res } = getMockRes()

      await service.store(req, res)

      expect(userRepo.save).toBeCalledTimes(1)
      expect(tokenRepo.save).toBeCalledWith({ user_id: 1})
    })

    it('should be possible show all of users', async () => {
      const req = getMockReq()
      const { res } = getMockRes()

      await service.index(req, res)

      expect(userRepo.find).toBeCalledTimes(1)
    })

    it('should be possible update an user', async () => {
      const req = getMockReq({
        body: {
          email: 'igor@ff.com'
        }
      })
      const { res } = getMockRes()

      await service.update(req, res)

      expect(userRepo.update).toBeCalledTimes(1)
    })


  })
});
