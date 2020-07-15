import { Controller, Post, Param } from '@nestjs/common';
import { TokenService } from './token.service';
import { ITokenDTO } from './token.dto';

@Controller('auth')
export class TokenController {
  constructor(private tokenService: TokenService) {}

  @Post(':token')
  store(@Param() token: ITokenDTO): Promise<void> {
    return this.tokenService.store(token)
  }
}
