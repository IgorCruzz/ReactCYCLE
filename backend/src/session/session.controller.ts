import { Controller, Post, Body } from '@nestjs/common';
import { LoginDTO } from './session.dto'
import { SessionService } from './session.service';
 

@Controller('session')
export class SessionController {
  constructor(private sessionService: SessionService){}

  @Post()
  store(@Body() login: LoginDTO): Promise<LoginDTO> {
    return this.sessionService.store(login)
  }  
}
