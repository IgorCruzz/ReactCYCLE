import { Test, TestingModule } from '@nestjs/testing';
import { ContactService } from './contact.service';
import {  getRepositoryToken  } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Contact } from '../entities/contact.entity' 

const contact = new Contact({
    id: 1,
    name: 'igor',
    email: 'igor@gmail.com',
    phone: '123456798',
    order: '123',
    message: 'message',
    created_at: new Date(),
    updated_at: new Date()
})
 
describe('ContactService', () => {
  let service: ContactService;
  let repo: Repository<Contact> 

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ContactService,
      {
        provide: getRepositoryToken(Contact),
        useValue: { 
          save: jest.fn().mockReturnValue(contact)
        }
      }],
    }).compile();

    service = module.get<ContactService>(ContactService);
    repo = module.get<Repository<Contact>>(getRepositoryToken(Contact)) 
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

   describe('contact', () => {
    it('should be possible create an message', async () => {

        expect(service.store({
          name: "igor",
	        email: "igor@gmail.com",
	        phone: "27411760",
	        order: "48848",
	        message: "mensagem"
        })).resolves.toEqual(contact)
        
        expect(repo.save).toBeCalledTimes(1)   

        expect(repo.save).toBeCalledWith({
          name: "igor",
	        email: "igor@gmail.com",
	        phone: "27411760",
	        order: "48848",
	        message: "mensagem"
        })       
    })
     
   })

  
})
