import { Test, TestingModule } from '@nestjs/testing'; 
import {  ProductController  } from './product.controller'
import {  ProductDTO } from './product.dto'
import { ProductService } from './product.service' 

describe('Cat Controller', () => {
  let controller: ProductController;
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({    
      controllers: [ProductController],     
      providers: [
        {
          provide: ProductService,
          useValue: {
            store: jest.fn(),
            index: jest.fn(),
            showOne: jest.fn(),
            show: jest.fn()
          }
        }
      ],
    }).compile();

    controller = module.get<ProductController>(ProductController);
    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
 
 
});