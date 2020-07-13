import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, UpdateResult, DeleteResult } from 'typeorm'
import { User } from '../entities/user.entity'
import { Token } from '../entities/token.entity' 
import * as Yup from 'yup'
import { hashSync } from 'bcrypt'
import RegisterMail from '../jobs/RegisterMail'
import * as crypto from 'crypto'
import { IUserDTO } from './users.dto';
 

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepositoy: Repository<User>,    
    @InjectRepository(Token)
    private tokenRepository: Repository<Token>
  ) {}
  
  async store(user: any): Promise<IUserDTO> {
    const schema = Yup.object().shape({
      name: Yup.string().required().min(5),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(7)
    })

    if(! await schema.isValid(user)) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Erro na validação'
      }, HttpStatus.BAD_REQUEST)      
    }     

    const { email, password } = user

    const findUser = await this.usersRepositoy.findOne({ where: { email }})

    if(findUser) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Este e-mail já está cadastrado no sistema'   
      }, HttpStatus.BAD_REQUEST)     
    }

    const hashPassword = hashSync(password, 8)

    const userData = await this.usersRepositoy.save({
      ...user,
      password: hashPassword
    })
 
    const token =  await this.tokenRepository.save({
      user_id: user.id,
      token: crypto.randomBytes(16).toString('hex')
    })
 
    await RegisterMail.handle(token)
    
    return userData 
  }

  async index(): Promise<IUserDTO[]> {
    
    const users = await this.usersRepositoy.find() 
 

    return users
  }

  async show(id: number): Promise<IUserDTO>{
    const user = await this.usersRepositoy.findOne({ id })
    return user
  }

  async delete(id: number): Promise<DeleteResult> { 
    return await this.usersRepositoy.delete(id)
  }

  async update(id: number, user: IUserDTO): Promise<UpdateResult> {
    const schema = Yup.object().shape({
      name: Yup.string().min(5),
      email: Yup.string().email(),
      password: Yup.string().min(6)
    })

    if(! await schema.isValid(user)) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Erro na validação'
      }, HttpStatus.BAD_REQUEST)    
    } 

    const userData = await this.usersRepositoy.update(id, user)

    return userData
  }
}
