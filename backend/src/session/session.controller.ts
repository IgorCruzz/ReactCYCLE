import { Controller, Post, Body } from '@nestjs/common';
import { ILoginDTO } from './session.dto'
import { SessionService } from './session.service';


@Controller('session')
export class SessionController {
  constructor(private sessionService: SessionService){}

  @Post()
  store(@Body() login: ILoginDTO): Promise<ILoginDTO> {
    return this.sessionService.store(login)
  }
}
