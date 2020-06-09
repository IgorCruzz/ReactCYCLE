import { Controller, Post, Req, Res, Get } from '@nestjs/common';
import { Request, Response } from 'express'
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  store(@Req() req: Request, @Res() res: Response): Promise<Response> {
    return this.productService.store(req, res)
  }

  @Get()
  index(@Req() req: Request, @Res() res: Response): Promise<Response> {
    return this.productService.index(req, res)
  }

  @Get('/busca')
  show(@Req() req: Request, @Res() res: Response): Promise<Response> {
    return this.productService.show(req, res)
  }
}
