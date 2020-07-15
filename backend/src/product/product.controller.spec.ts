import { Test, TestingModule } from '@nestjs/testing'; 
import {  ProductController  } from './product.controller'
import {  ProductDTO } from './product.dto'
import { ProductService } from './product.service' 



const product = {
  name: "nome do produtomaydaaa",
  quantity: 10,
  price: 500.5,
  category: "Bicicletas",
  avatar: 117
}

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
            store: jest.fn().mockResolvedValue(product),
            index: jest.fn().mockResolvedValue(product),
            showOne: jest.fn().mockResolvedValue(product),
            show: jest.fn().mockResolvedValue(product)
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

  describe('Product', () => {
    it('should be able to create a product', async () => {
      expect(await controller.store({
        id: 1,
        name: "nome do produtomaydaaa",
        quantity: 10,
        price: 500.5,
        category: "Bicicletas",
        avatar: 117
      })).toEqual(product)
    })
    it('should be able to show a certain product', async () => {
      expect(await controller.showOne({ id: 1})).toEqual(product)
    })
    it('should be able to show product with certain characters', async () => {
      expect(await controller.show('product')).toEqual(product)
    })
    it('should be able to show all products', async () => {
      expect(await controller.index(undefined)).toEqual(product)
    })
  })
 
 
});