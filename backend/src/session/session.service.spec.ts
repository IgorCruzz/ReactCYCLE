import { Test, TestingModule } from '@nestjs/testing';
import {  getRepositoryToken  } from '@nestjs/typeorm'
import { SessionService } from './session.service'; 
import  { Repository  } from 'typeorm'
import { User } from '../entities/user.entity'
import { JwtStrategy } from './jwt.strategy'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from './constants'  
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'

const userMock = new User({ 
  id: 1,
  name: 'nome de usuario',
  email: 'izone@gmail.com', 
  password: bcrypt.hashSync('123456789', 8),  
})
 

describe('SessionService', () => {
  let service: SessionService; 
  let repo: Repository<User>
  let jwtService: JwtService

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
            findOne: jest.fn().mockResolvedValue(userMock)
          }
        }       
      ],
    }).compile();

    service = module.get<SessionService>(SessionService); 
    repo = module.get<Repository<User>>(getRepositoryToken(User)) 
    jwtService = module.get<JwtService>(JwtService)
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Session', () => { 
    it('should be possible to log in', async () => {  
      expect.assertions(1); 
      expect(await service.store({ email: userMock.email, password: '123456789' }))
   
      })  
    

    it('trhow an erro if user does not exists', async () => {
      expect.assertions(1);
      try {
        jest.spyOn(repo, 'findOne').mockResolvedValue(undefined)      
        await service.store({ email: 'any@gmail.com', password: '12345679'})
        
      } catch (err){
        expect(err.message).toEqual('Http Exception')
      }
    })

    it('throw an error if password is not correct', async () => {
      expect.assertions(1);
      try {
        await service.store({ email: userMock.email, password: 'WRONG PASSWORD'})
      } catch (err){
        expect(err.message).toEqual('Http Exception')
      }
    })
     
     
  })
});
