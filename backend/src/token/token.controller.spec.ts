import { Test, TestingModule } from '@nestjs/testing';
import { TokenController } from './token.controller';

describe('Teste Controller', () => {
  let controller: TokenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TokenController],
    }).compile();

    controller = module.get<TokenController>(TokenController);
  });   
});

const soma = (a: number,b: number): number => a + b

describe('TokenController', () => {
  it('true', () => {
    const fodase = soma(5, 5)
    expect(fodase).toBe(10)
  })
})
