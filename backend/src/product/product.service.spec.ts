import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { getRepositoryToken } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Product } from '../entities/product.entity'


const newProduct = new Product(
  {
     id: 1,
     name: 'PRODUCT NAME',
     price: 54,
     quantity: 10,
     avatar: '',
     category: 'category'  
  }
)

const product1 = new Product(
  {
     id: 1,
     name: 'PRODUCT NAME',
     price: 54,
     quantity: 10,
     avatar: '',
     category: 'category'  
  }
)

const product2 = new Product(
  {
     id: 2,
     name: 'PRODUCT NAME',
     price: 54,
     quantity: 10,
     avatar: '',
     category: 'category'  
  }
)

const productList =  [product1, product2]
 

describe('ProductService', () => {
  let service: ProductService;
  let repo: Repository<Product>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductService,
      {
        provide: getRepositoryToken(Product),
        useValue: {
          find: jest.fn().mockResolvedValue(productList),
          save: jest.fn().mockReturnValue(newProduct)
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
    describe('Store', () => {
      it('should be able to create an product', async () =>{
        const repoSpy = jest.spyOn(repo, 'save')

        expect(await service.store(newProduct)).toEqual(newProduct)
        expect(repoSpy).toBeCalledTimes(1)

      })

      it('throw an error if the request body has empty values', async () => {
        try {
          await service.store({
            id: NaN,
            name: '',
            price: NaN,
            quantity: NaN,
            avatar: NaN,
            category: ''  
         })
        } catch(err){
          expect(err.message).toEqual('Http Exception')
        }
      })
    })

    describe('Index', () => {
      it('should be  able to list all products', async () => {
        expect(await service.index({page: 1, min: 1, max: 999})).toEqual(productList)
      })

      it('should be able to list all product of an specific category', async () => {
        expect(await service.index({category: 'category' ,page: 1, min: 1, max: 999})).toEqual(productList)
      })
    })

     
  })
});
