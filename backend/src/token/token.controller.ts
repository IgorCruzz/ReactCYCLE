import { Controller, Post, Param } from '@nestjs/common'; 
import { TokenService } from './token.service';

@Controller('auth')
export class TokenController {
  constructor(private tokenService: TokenService) {}

  @Post(':token')
  store(@Param() token: string): Promise<void> {
    return this.tokenService.store(token)
  }
}
