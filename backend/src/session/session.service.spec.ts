import { Test, TestingModule } from '@nestjs/testing';
import { SessionService } from './session.service';
import { getRepositoryToken } from '@nestjs/typeorm'
import  { Repository } from 'typeorm'
import { User  } from '../entities/user.entity'
import { JwtStrategy } from './jwt.strategy'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from './constants'
import { getMockRes, getMockReq } from '@jest-mock/express'

describe('SessionService', () => {
  let service: SessionService;
  let repo: Repository<User>
 

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [      
        JwtModule.register({
          secret: jwtConstants.secret,
          signOptions: { expiresIn: '7d'}
        })
      ],
      providers: [
        JwtStrategy,
        SessionService,
        {
          provide: getRepositoryToken(User),
          useValue: {
            findOne: jest.fn()
          }
        }
      ],
    }).compile();

    service = module.get<SessionService>(SessionService);
    repo = module.get<Repository<User>>(getRepositoryToken(User))
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Session', () => {
    it('should be possible login', async () => {
      const req =  getMockReq({
        body: {
          email: 'igorskt2009@gmail.com',
          password: '19871218'
        }
      })
      const { res } = getMockRes()

      await service.store(req, res)

      expect(repo.findOne).toBeCalledTimes(1)      
    })
  })
});
