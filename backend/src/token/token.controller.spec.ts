import { Test, TestingModule } from '@nestjs/testing';
import { TokenController } from './token.controller';
import { TokenService } from './token.service';

describe('Cat Controller', () => {
  let controller: TokenController;
  let service: TokenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TokenController],
      providers: [
        {
          provide: TokenService,
          useValue: {
            store: jest.fn().mockReturnValue(true),
          },
        },
      ],
    }).compile();

    controller = module.get<TokenController>(TokenController);
    service = module.get<TokenService>(TokenService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Token', () => {
    it('should be able to active the token', async () => {
      expect(controller.store({ token: 'ODASKDSDNSUDSDDY' })).toBeTruthy();
    });
  });
});
