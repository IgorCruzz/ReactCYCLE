import { Test, TestingModule } from '@nestjs/testing'; 
import { SessionController } from './session.controller' 
import { SessionService } from './session.service'
 


describe('Cat Controller', () => {
  let controller: SessionController;
  let service: SessionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({    
      controllers: [SessionController],     
      providers: [
        {
          provide: SessionService,
          useValue: {
            store: jest.fn().mockResolvedValue({
              id: 1,
              email: 'igorskt2009@gmail.com',
              password: '123456789',
              token: 'ONETOKENHERE'
            })
          }
        }
      ],
    }).compile();

    controller = module.get<SessionController>(SessionController);
    service = module.get<SessionService>(SessionService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Session', () => {
      it('shoulb be possible login', async () => {
        expect(await controller.store({ email: 'igorskt2009@gmail.com', password: '123456789' }))
        .toContainKeys(['id', 'email', 'password', 'token'])
      })
  })

   
 
});