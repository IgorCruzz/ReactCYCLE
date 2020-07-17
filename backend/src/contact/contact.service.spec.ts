import { Test, TestingModule } from '@nestjs/testing';
import { ContactService } from './contact.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Contact } from '../entities/contact.entity';

const contact = new Contact({
  name: 'username',
  email: 'email@gmail.com',
  phone: '123456798',
  order: '123',
  message: 'message',
});

describe('ContactService', () => {
  let service: ContactService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ContactService,
        {
          provide: getRepositoryToken(Contact),
          useValue: {
            save: jest.fn().mockReturnValue(contact),
          },
        },
      ],
    }).compile();

    service = module.get<ContactService>(ContactService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('contact', () => {
    it('should be possible create an message', async () => {
      expect(await service.store(contact)).toEqual(contact);
    });

    it('throw an error if field isnt filled', async () => {
      try {
        await service.store({
          name: '',
          email: '',
          phone: '',
          order: '',
          message: '',
        });
      } catch (err) {
        expect(err.message).toEqual('Http Exception');
      }
    });

    it('throw an error if email is in incorrect format', async () => {
      try {
        await service.store({
          name: 'name',
          email: 'wrongemail.com',
          phone: '2199999999',
          order: '21',
          message: 'message',
        });
      } catch (err) {
        expect(err.message).toEqual('Http Exception');
      }
    });
  });
});
