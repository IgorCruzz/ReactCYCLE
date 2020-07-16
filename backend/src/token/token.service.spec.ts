import { Test, TestingModule } from '@nestjs/testing';
import {  TokenService } from './token.service';
import {  getRepositoryToken  } from '@nestjs/typeorm'
import { Token } from '../entities/token.entity'
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';

const contact = new Token({
     user_id: 1,
     token: 'UDSHSDHUSDHSHDUHDUSHDUS'
})

const user =
  {
    id: 1,
    name: 'user one',
    email: 'userone@gmail.com',
    password: '123456789',
    cpf: '17518591878',
    phone: '99999999999',
    gender: "masculino",
    birth: 19031993,
    cep: '2545455',
    address: "rua dr oliveira",
    number: 819,
    active: true,
    complement: "fundos",
    referency: "em frente a um escadao",
    neighborhood: "barra do imbui",
    city: "teresopolis",
    state: "RJ"
  }


describe('ContactService', () => {
  let service: TokenService;
  let repo: Repository<Token>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TokenService,
      {
        provide: getRepositoryToken(Token),
        useValue: {
          findOne: jest.fn().mockResolvedValue(contact)
        }
      },
      {
        provide: getRepositoryToken(User),
        useValue: {
          findOne: jest.fn().mockResolvedValue(user),
          update: jest.fn().mockReturnValue(true)
        }
      }],
    }).compile();

    service = module.get<TokenService>(TokenService);
    repo = module.get<Repository<Token>>(getRepositoryToken(Token))
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Token', () => {
    it('should be possible to active the token', async () => {
      expect(await service.store({ token: 'UDSHSDHUSDHSHDUHDUSHDUS'}))
      .toBeTruthy()
    })

    it('throws an erro if went sended an invalid token', async () => {
      try {
        jest.spyOn(repo, 'findOne').mockResolvedValue(undefined)
        await service.store({ token: 'INVALID TOKEN'})
      } catch (err){
        expect(err.message).toEqual('Http Exception')
      }
    })
  })
})
