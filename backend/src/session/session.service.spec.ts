import { Test, TestingModule } from '@nestjs/testing';
import {  getRepositoryToken  } from '@nestjs/typeorm'
import { SessionService } from './session.service'; 
import  { Repository  } from 'typeorm'
import { User  } from '../entities/user.entity'
import { JwtStrategy } from './jwt.strategy'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from './constants'
import { getMockRes, getMockReq } from '@jest-mock/express'
import { PlaylistRepositoryFake } from './UserRepositoryFake'

const Usuario = new User({  
  id: 1,
  name: 'nome de usuario',
  email: 'email@gmail.com', 
  password: '123456789',  
})
 

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
          useClass: PlaylistRepositoryFake
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
    it('check if user has already exits', async () => { 
        const req = getMockReq()
        const { res } = getMockRes()

        await service.store(req, res)
    })  
  })
});
