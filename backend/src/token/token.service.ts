import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import {Token} from '../entities/token.entity'
import { User } from '../entities/user.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, UpdateResult } from 'typeorm'
import { ITokenDTO } from './token.dto'

@Injectable()
export class TokenService {
  constructor(
    @InjectRepository(Token)
    private tokenRepository: Repository<Token>,
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async store(token: ITokenDTO): Promise<UpdateResult> {

    const tokenExists = await this.tokenRepository.findOne({ where: { token }})

    if(!tokenExists){
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Incorrect Token'
      }, HttpStatus.BAD_REQUEST)
    }

    const user = await this.userRepository.findOne({ id: tokenExists.user_id })

    return await this.userRepository.update(user.id, {
      active: true
    })
  }
}
