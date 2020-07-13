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
          save: jest.fn(),
          find: jest.fn().mockResolvedValue(manyUsers),
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

    it('should be possible to get an user', async () => {
      expect(await service.show(userMock.id)).toEqual(userMock)        
    })

    it('should be possible to get all user', async () => {
      expect(await service.index()).toEqual(manyUsers)        
    })

    it('delete an user', async () => {
      expect(await service.delete(1)).toBe(true)
    })
  })
});
