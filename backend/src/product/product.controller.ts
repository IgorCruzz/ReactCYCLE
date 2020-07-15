import { Controller, Post, Get, Body, Param, Query } from '@nestjs/common'; 
import { ProductService } from './product.service';
import { ProductDTO } from './product.dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  store(@Body() product: ProductDTO): Promise<ProductDTO> {
    return this.productService.store(product)
  }

  @Get()
  index(@Query() paramData: {
    category?: string, 
    page?: number, 
    min?: number,
    max?: number 
  }  ): Promise<ProductDTO> {
    return this.productService.index(paramData || undefined)
  }

  @Get('/:id')
  showOne(@Param() product: { id: number}): Promise<ProductDTO> {
    return this.productService.showOne(product)
  }

  @Get('/busca')
  show(@Query() name: string): Promise<ProductDTO[]> {
    return this.productService.show(name)
  }
}
