import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { getRepositoryToken } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Product } from '../entities/product.entity'
import { getMockReq, getMockRes } from '@jest-mock/express'

describe('ProductService', () => {
  let service: ProductService;
  let repo: Repository<Product>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductService,
      {
        provide: getRepositoryToken(Product),
        useValue: {
          find: jest.fn(),
          save: jest.fn()
        }
      }],
    }).compile();

    service = module.get<ProductService>(ProductService);
    repo = module.get<Repository<Product>>(getRepositoryToken(Product))
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Product', () => {
    it('should be possible to show products', async () => {
        const req = getMockReq({
          query: {
            name: 'name'
          }
        })
        const {res} = getMockRes()

        await service.show(req, res)

        expect(repo.find).toBeCalledTimes(1)
    })

    it('should be possible to show a products with certain prices', async () => {
      const req = getMockReq()
      const {res} = getMockRes()

      await service.index(req, res)

      expect(repo.find).toBeCalledTimes(1)
    })

    it('should be possible create product', async () => {
      const req = getMockReq({
        body: {
          name: "NOME DO PRODUTO",
          quantity: 10,
          price: 500.50,
          category: "Peças",
          avatar: 20
        }
      })
      const {res} = getMockRes()

      await service.store(req, res)

      expect(repo.save).toBeCalledTimes(1)
    })

     
  })
});
