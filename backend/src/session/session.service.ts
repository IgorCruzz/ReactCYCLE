import { Injectable } from '@nestjs/common';
import { Request, Response } from 'express'
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


  async store(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body

    const user = await this.usersRepository.findOne({ where: { email }})
    
    if(!user){
      return res.status(400).json({ error: 'Email inválido'})
    }

    const comparePassword = await compare(password, user.password)

    if(!comparePassword) {
      return res.status(400).json({ error: 'A senha está incorreta'})
    }    

    const payload = { 
      sub: user.id
    }

    return res.json({
      id: user.id,
      email,
      password,
      token: this.jwtService.sign(payload)
    })
  }
}
