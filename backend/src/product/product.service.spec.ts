import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { getRepositoryToken } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Product } from '../entities/product.entity'


const newProduct = new Product( 
  1,
  'PRODUCT NAME',
  54,
  10,
  1,
  'category' 
)

const product1 = new Product(  
  1,
  'PRODUCT NAME',
  54,
  10,
  1,   
  'category'  
)

const product2 = new Product(   
  2,
  'PRODUCT NAME2',
  54,
  10,
  2  
)

const productExtends = {
  ...product1,
    avatar_data: {
    id: 1, 
    name: 'avatarName', 
    url: 'http://localhost:3333/file/avatarName',
    created_at: new Date(),
    updated_at: new Date(),
   }

}

const productExtends2 = {
  ...product2,
    avatar_data: {
    id: 2, 
    name: 'avatarName', 
    url: 'http://localhost:3333/file/avatarName',
    created_at: new Date(),
    updated_at: new Date(),
   }
}
 
const productList =  [productExtends, productExtends2]
 

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
          save: jest.fn().mockReturnValue(newProduct),
          findOne: jest.fn().mockResolvedValue(productExtends)
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
        expect(await service.index({category: 'category' ,page: 1, min: 1, max: 999})).toEqual([{
          id: productExtends.id,
          name: productExtends.name,
          price: productExtends.price,
          quantity: productExtends.quantity,
          avatar_url: productExtends.avatar_data.url
        },     
        {
          id: productExtends2.id,
          name: productExtends2.name,
          price: productExtends2.price,
          quantity: productExtends2.quantity,
          avatar_url: productExtends2.avatar_data.url        
      }])
      })
    }) 

    
    describe('ShowOne', () => {
      it('should be able to show one product', async () => {      
        const repoSpy = jest.spyOn(repo, 'findOne')
        expect(await service.showOne({ id: 1})).toEqual(productExtends)
        expect(repoSpy).toBeCalledTimes(1)
      })
    })

    describe('Show', () => {
      it('should be able to search certain product', async () => {
        const repoSpy = jest.spyOn(repo, 'find')

        expect(await service.show('PRODUCT'))
        .toEqual([{
        avatar_url: "http://localhost:3333/file/avatarName",
        id: 1,
        name: "PRODUCT NAME", 
        price: 54,
        quantity: 10
      }, 
      {
        avatar_url: "http://localhost:3333/file/avatarName", 
        id: 2, 
        name: "PRODUCT NAME2", 
        price: 54,
        quantity: 10}
      ])
        expect(repoSpy).toBeCalledTimes(1)
      })
    })
  })
});
