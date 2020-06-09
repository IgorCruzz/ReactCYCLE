import { Controller, Post, Req, Res } from '@nestjs/common';
import { Response, Request} from 'express'
import { TokenService } from './token.service';

@Controller('auth')
export class TokenController {
  constructor(private tokenService: TokenService) {}

  @Post(':token')
  store(@Req() req: Request, @Res() res: Response): Promise<Response> {
    return this.tokenService.store(req, res)
  }
}
