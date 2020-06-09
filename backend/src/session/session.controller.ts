import { Controller, Post, Req, Res, Get, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express'
import { SessionService } from './session.service';
import { JwtAuthGuard } from './jwt-auth.guard'

@Controller('session')
export class SessionController {
  constructor(private sessionService: SessionService){}

  @Post()
  store(@Req() req: Request, @Res() res: Response): Promise<Response> {
    return this.sessionService.store(req, res)
  }  
}
