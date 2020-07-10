import { Test, TestingModule } from '@nestjs/testing';
import { ContactService } from './contact.service';
import {  getRepositoryToken  } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Contact } from '../entities/contact.entity'
import { getMockReq, getMockRes } from '@jest-mock/express'
 
import { INestApplication } from '@nestjs/common'
 
 
describe('ContactService', () => {
  let service: ContactService;
  let repo: Repository<Contact>
  let app: INestApplication

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ContactService,
      {
        provide: getRepositoryToken(Contact),
        useValue: { 
          save: jest.fn()
        }
      }],
    }).compile();

    service = module.get<ContactService>(ContactService);
    repo = module.get<Repository<Contact>>(getRepositoryToken(Contact))
    app = module.createNestApplication()
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

   describe('contact', () => {
    it('should be create an message', async () => { 
      const req = getMockReq({
        body: {
            name: "igor",
            email: "igorskt2009@gmail.com",
            phone: "27411760",
            order: "48848",
            message: "mensagem"          
        }
      })
      
      const { res } = getMockRes()

      await service.store(req, res) 

      expect(repo.save).toBeCalledWith(req.body)
      expect(repo.save).toBeCalledTimes(1)
    
    })
     
   })

  
})
