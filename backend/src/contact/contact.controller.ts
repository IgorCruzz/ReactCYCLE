import { Controller, Post, Req, Res } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Request, Response } from 'express'

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService){}

  @Post()
  store(@Req() req: Request, @Res() res: Response): Promise<Response>{
    return this.contactService.store(req, res)
  }

}
