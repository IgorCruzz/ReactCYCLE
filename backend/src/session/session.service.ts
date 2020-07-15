import { Injectable, HttpException, HttpStatus  } from '@nestjs/common';
import { LoginDTO } from './session.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from '../entities/user.entity'
import { Repository } from 'typeorm'
import { compare } from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
import * as Yup from 'yup'

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService
  ) {}

  async store(login: LoginDTO): Promise<LoginDTO> {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required()
    })
    if(! await schema.isValid(login)) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Erro na validação'
      }, HttpStatus.BAD_REQUEST)
    }

    const { email, password } = login

    const user = await this.usersRepository.findOne({ email })

    if(!user){
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Dont have an user with this e-mail'
      }, HttpStatus.BAD_REQUEST)
    }

    const comparePassword = await compare(password, user.password)

    if(!comparePassword) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'The password has been incorrect'
      }, HttpStatus.BAD_REQUEST)
    }

    const payload = {
      sub: user.id
    }

    return {
      id: user.id,
      email,
      password,
      token: this.jwtService.sign(payload)
    }
  }
}
