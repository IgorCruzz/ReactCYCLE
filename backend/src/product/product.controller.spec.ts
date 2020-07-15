import { Test, TestingModule } from '@nestjs/testing';
import {  ProductController  } from './product.controller'
import { ProductService } from './product.service'

const product = {
  id: 1,
  name: "nome do produto",
  quantity: 10,
  price: 500.5,
  category: "Bicicletas",
  avatar: 117,
  created_at: new Date(),
  update_at: new Date()
}


const productArray = [{
  id: 1,
  name: "nome do produto",
  quantity: 10,
  price: 500.5,
  category: "bikes",
  avatar: 117,
  created_at: new Date(),
  update_at: new Date()
},
{
  id: 2,
  name: "nome do produto",
  quantity: 10,
  price: 500.5,
  category: "bikes",
  avatar: 117,
  created_at: new Date(),
  update_at: new Date()
}]

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
            index: jest.fn().mockResolvedValue(productArray),
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
        name: "nome do produto",
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

      expect(await controller.index()).toEqual(productArray)

    })

    it('should be able to show all products of certain category', async () => {

      expect(await controller.index({ category: 'bikes', page: 1, min: 1, max: 9999 })).toEqual(productArray)

    })
  })


});
