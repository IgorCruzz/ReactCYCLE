import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Product } from '../entities/product.entity';
import { Repository, Between, Like } from 'typeorm';
import * as Yup from 'yup'
import { IProductDTO, IProductList, IParamData } from './product.dto';



@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) {}

  async store(contact: IProductDTO): Promise<IProductDTO> {
    const schema = Yup.object().shape({
      name: Yup.string().min(5).required(),
      price: Yup.number().positive().required(),
      quantity: Yup.number().positive().required()
    })

    if(! await schema.isValid(contact)){
      throw new HttpException({
        statis: HttpStatus.BAD_REQUEST,
        error: 'Validation Error'
      }, HttpStatus.BAD_REQUEST)

    }

    const { name, ...rest } = contact

    return await this.productRepository.save({
      name: name.toLowerCase(),
	    ...rest
    })
  }

  async index(paramData?: IParamData): Promise<IProductDTO[] | IProductList[]> {

    if(!paramData){
      return await this.productRepository.find()
    }

    const products = await this.productRepository.find({
      where: {
        category: paramData.category,
        price: Between(paramData.min, paramData.max)
        },
      skip: (Number(paramData.page) - 1) * 12,
      take: 12,
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

  async show(name: string): Promise<IProductList[]> {

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

  async showOne(product: { id: number}): Promise<IProductDTO> {
    const { id } = product
    const productData = await this.productRepository.findOne({
      where: { id },
      relations: ['avatar_data']
    })

    return productData
  }
}
