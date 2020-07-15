import { Controller, Post, Get, Body, Param, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { IProductDTO } from './product.dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  store(@Body() product: IProductDTO): Promise<IProductDTO> {
    return this.productService.store(product)
  }

  @Get()
  index(@Query() paramData: {
    category?: string,
    page?: number,
    min?: number,
    max?: number
  }  ): Promise<IProductDTO> {
    return this.productService.index(paramData || undefined)
  }

  @Get('/:id')
  showOne(@Param() product: { id: number}): Promise<IProductDTO> {
    return this.productService.showOne(product)
  }

  @Get('/busca')
  show(@Query() name: string): Promise<IProductDTO[]> {
    return this.productService.show(name)
  }
}
