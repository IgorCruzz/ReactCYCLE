import { Controller, Get, Req, Res, Post, Delete, Put, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express'
import { UsersService } from './users.service'


@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService){}

  @Post()
  store(@Req() req: Request, @Res() res: Response): Promise<Response> {
    return this.usersService.store(req, res)
  }

  @Get()
  index(@Req() req: Request, @Res() res: Response): Promise<Response> {
    return this.usersService.index(req, res)
  }

  @Get(':id')
  show(@Req() req: Request, @Res() res: Response): Promise<Response> {
    return this.usersService.show(req, res)
  }

  @Delete(':id')
  delete(@Req() req: Request, @Res() res: Response): Promise<Response> {
    return this.usersService.delete(req, res)
  }

  @Put(':id')
  update(@Req() req: Request, @Res() res: Response): Promise<Response>{
    return this.usersService.update(req, res)
  }
}
 
