import { Injectable } from '@nestjs/common';
import { Response, Request } from 'express'
import {Token} from '../entities/token.entity'
import { User } from '../entities/user.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class TokenService {
  constructor(
    @InjectRepository(Token)
    private tokenRepository: Repository<Token>,
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async store(req: Request, res: Response): Promise<Response> {
    const { token } = req.params

    const tokenExists = await this.tokenRepository.findOne({ where: { token }})

    const user = await this.userRepository.findOne({ where: { id: tokenExists.user_id }})

    await this.userRepository.update(user.id, {
      active: true
    })
    
    return res.json()
  }
}
