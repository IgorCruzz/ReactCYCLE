import { Controller, Post, Get, Body, Param, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { IProductDTO, IParamData, IProductList } from './product.dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  store(@Body() product: IProductDTO): Promise<IProductDTO> {
    return this.productService.store(product);
  }

  @Get()
  index(
    @Query() paramData?: IParamData,
  ): Promise<IProductDTO[] | IProductList[]> {
    return this.productService.index(paramData);
  }

  @Get('/:id')
  showOne(@Param() product: { id: number }): Promise<IProductDTO> {
    return this.productService.showOne(product);
  }

  @Get('/busca')
  show(@Query() product: { name: string}): Promise<IProductList[]> {
    return this.productService.show(product);
  }
}
