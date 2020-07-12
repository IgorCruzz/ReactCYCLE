import { Injectable, HttpException, HttpStatus  } from '@nestjs/common';
import { LoginDTO } from './session.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from '../entities/user.entity'
import { Repository } from 'typeorm'
import { compare } from 'bcrypt'
import { JwtService } from '@nestjs/jwt' 

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService
  ) {} 

  async store(login: LoginDTO): Promise<LoginDTO> {
    const { email, password } = login 

    const user = await this.usersRepository.findOne({ email })    
   
    if(!user){    
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Não existe um usuário com este e-mail'
      }, HttpStatus.BAD_REQUEST)   
    }
   
    const comparePassword = await compare(password, user.password)
 
    if(!comparePassword) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'A senha está incorreta'
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
