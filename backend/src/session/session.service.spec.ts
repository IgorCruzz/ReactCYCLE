import 'jest-extended';
import { Test, TestingModule } from '@nestjs/testing';
import {  getRepositoryToken  } from '@nestjs/typeorm'
import { SessionService } from './session.service'; 
import  { Repository  } from 'typeorm'
import { User } from '../entities/user.entity'
import { JwtStrategy } from './jwt.strategy'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from './constants' 
import * as bcrypt from 'bcrypt'

const userMock = { 
  id: 1,
  name: 'nome de usuario',
  email: 'izone@gmail.com', 
  password: bcrypt.hashSync('123456789', 8),  
}

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
            findOne: jest.fn().mockResolvedValue(userMock)
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
    it('should be possible to log in', async () => {  
 
      const repoSpy = jest.spyOn(repo, 'findOne')

      expect(await service.store({ email: userMock.email, password: '123456789' }))
      .toContainKeys(['id', 'email', 'password', 'token'])  
      expect(repoSpy).toBeCalledTimes(1)
      expect(repoSpy).toBeCalledWith({ email: userMock.email})
      })  
    

    it('trhow an error if user does not exists', async () => {
      expect.assertions(1);
      try {       
        const repoSpy = jest.spyOn(repo, 'findOne').mockResolvedValue(undefined)      
        await service.store({ email: 'any@gmail.com', password: '12345679'})
        expect(repoSpy).toBeCalledWith({ email: 'any@gmail.com'})
        
      } catch (err){
        expect(err.message).toEqual('Http Exception')
      }
    })

    it('throw an error if password is not correct', async () => {
      expect.assertions(1);
      try {
        const repoSpy = jest.spyOn(repo, 'findOne')
        await service.store({ email: userMock.email, password: 'WRONG PASSWORD'})
        expect(repoSpy).toBeCalledWith({ email: userMock.email})
      } catch (err){
        expect(err.message).toEqual('Http Exception')
      }
    })
     
     
  })
});
