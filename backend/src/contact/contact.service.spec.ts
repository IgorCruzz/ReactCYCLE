import { Test, TestingModule } from '@nestjs/testing';
import { ContactService } from './contact.service';
import {  getRepositoryToken  } from '@nestjs/typeorm'
import { Contact } from '../entities/contact.entity'

const contact = new Contact({
     name: 'username',
     email: 'email@gmail.com',
     phone: '123456798',
     order: '123',
     message: 'message'
})


describe('ContactService', () => {
  let service: ContactService;


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
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

   describe('contact', () => {
    it('should be possible create an message', async () => {
      expect(await service.store({
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        order: contact.order,
        message: contact.message
      })).toEqual(contact)
    })

   })


})
