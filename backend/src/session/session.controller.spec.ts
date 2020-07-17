import { Test, TestingModule } from '@nestjs/testing';
import { SessionController } from './session.controller';
import { SessionService } from './session.service';

const Session = {
  id: 1,
  email: 'email@gmail.com',
  password: 'password',
  token: 'token',
};

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
            store: jest.fn().mockResolvedValue(Session),
          },
        },
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
      expect(
        await controller.store({
          email: 'email@gmail.com',
          password: 'password',
        }),
      ).toEqual(Session);
    });
  });
});
