import { Controller, Post, Param } from '@nestjs/common';
import { TokenService } from './token.service';
import { ITokenDTO } from './token.dto';
import { UpdateResult } from 'typeorm';

@Controller('auth')
export class TokenController {
  constructor(private tokenService: TokenService) {}

  @Post(':token')
  store(@Param() token: ITokenDTO): Promise<UpdateResult> {
    return this.tokenService.store(token)
  }
}
