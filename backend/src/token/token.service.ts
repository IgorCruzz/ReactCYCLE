import { Injectable } from '@nestjs/common'
import {Token} from '../entities/token.entity'
import { User } from '../entities/user.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ITokenDTO } from './token.dto'

@Injectable()
export class TokenService {
  constructor(
    @InjectRepository(Token)
    private tokenRepository: Repository<Token>,
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async store(token: ITokenDTO): Promise<void> {

    const tokenExists = await this.tokenRepository.findOne({ where: { token }})

    const user = await this.userRepository.findOne({ where: { id: tokenExists.user_id }})

    await this.userRepository.update(user.id, {
      active: true
    })
  }
}
