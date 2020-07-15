import { Test, TestingModule } from '@nestjs/testing';
import { ContactController } from './contact.controller'
import { ContactService } from './contact.service'


const newContact = {
  id: 17,
  name: "igor",
  email: "email@gmail.com",
  phone: "21999999999",
  order: "999",
  message: "mensagem",
  created_at: new Date(),
  updated_at: new Date()
}


describe('Cat Controller', () => {
  let controller: ContactController;
  let service: ContactService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactController],
      providers: [
        {
          provide: ContactService,
          useValue: {
            store: jest.fn().mockResolvedValue(newContact)
          }
        }
      ],
    }).compile();

    controller = module.get<ContactController>(ContactController);
    service = module.get<ContactService>(ContactService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('New Contact', () => {
    it('should be able to create a contact', async () => {

      expect(await controller.store(newContact)).toEqual(newContact)

    })
  })

});
