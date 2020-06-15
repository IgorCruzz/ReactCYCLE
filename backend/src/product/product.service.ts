import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Product } from 'src/entities/product.entity';
import { Repository, Between, Like } from 'typeorm';
import { Request, Response } from 'express'
import * as Yup from 'yup'

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) {}

  async store(req: Request, res: Response): Promise<Response> {
    const schema = Yup.object().shape({
      name: Yup.string().min(5).required(),
      price: Yup.number().positive().required(),
      quantity: Yup.number().positive().required()
    })

    if(! await schema.isValid(req.body)){
      return res.status(400).json({ error: 'Erro na validação'})     
    }

    const product = await this.productRepository.save(req.body)
    return res.json(product)   
  }

  async index(req: Request, res: Response): Promise<Response> {
   
    const { category, page, min, max } = req.query
    
    const products = await this.productRepository.find({         
      where: { 
        category,
        price: Between(min, max)
        },      
      skip: (Number(page) - 1) * 12,      
      take: 12,
      relations: ['avatar_data']      
    })

    const productList = products.map(product => { 
      return {     
        ...product          
        }        
    })    
     
    
  
    return res.json(productList)
  }

  async show(req: Request, res: Response): Promise<Response> {
    const { name } = req.query

    const products = await this.productRepository.find({         
      where: { 
        name: Like(`%${name}%`)    
        },     
      relations: ['avatar_data']      
    })
    
    const productList = products.map(product => { 
      return {     
        ...product,
        avatar_url: `http://localhost:3333/file/${product.avatar_data.name}`      
        }
        
    })         
  
    return res.json(productList)
  }
} 
