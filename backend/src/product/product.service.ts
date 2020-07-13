import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Product } from '../entities/product.entity';
import { Repository, Between, Like } from 'typeorm'; 
import * as Yup from 'yup'
import { ProductDTO } from './product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) {}

  async store(contact: ProductDTO): Promise<ProductDTO> {
    const schema = Yup.object().shape({
      name: Yup.string().min(5).required(),
      price: Yup.number().positive().required(),
      quantity: Yup.number().positive().required()
    })

    if(! await schema.isValid(contact)){
      throw new HttpException({
        statis: HttpStatus.BAD_REQUEST,
        error: 'Erro na validação'
      }, HttpStatus.BAD_REQUEST)
       
    }

    const { name, ...rest } = contact

    const product = await this.productRepository.save({      
      name: name.toLowerCase(),
	    ...rest
    })
    return product  
  } 

  async index(paramData: {
    category?: string, 
    page?: number, 
    min?: number,
    max?: number 
  }): Promise<any> {
  
    const { category, page, min, max } = paramData
   
    if(!category){
      const products = await this.productRepository.find()     
      return products
    }     
 
    const products = await this.productRepository.find({         
      where: { 
        category,
        price: Between(min, max)
        },      
      skip: (Number(page) - 1) * 12,      
      take: 12,
      relations: ['avatar_data']      
    })   
    console.log(products)

    const productList = products.map(product => { 
      return {     
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        avatar_url: product.avatar_data.url 
        }        
    })    

  
    return productList
  }

  async show(name: string): Promise<any[]> { 

    const products = await this.productRepository.find({         
      where: { 
        name: Like(`%${name}%`)    
        },     
      relations: ['avatar_data']      
    })
    
    const productList = products.map(product => { 
      return {     
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        avatar_url: product.avatar_data.url 
        }        
    })        
  
    return productList
  }

  async showOne(product: { id: number}): Promise<ProductDTO> {  
    const { id } = product
    const productData = await this.productRepository.findOne({
      where: { id },
      relations: ['avatar_data']
    }) 
    return productData
  }
} 
