import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, UpdateResult, DeleteResult } from 'typeorm'
import { User } from '../entities/user.entity'
import { Token } from '../entities/token.entity' 
import * as Yup from 'yup'
import { hashSync } from 'bcrypt'
import RegisterMail from '../jobs/RegisterMail'
import * as crypto from 'crypto'
import { IUserDTO, IUserUpdateDTO } from './users.dto';
 

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
        email: Yup.string().email().required(),
        confirmEmail: Yup.string().oneOf([Yup.ref('email')], 'Os emails não se correspondem').required(),
        password: Yup.string().min(6).required(),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'As senhas não se correspondem').required(),
        name: Yup.string().min(4).required(),
        cpf: Yup.string(),
        cnpj: Yup.string(),
        stateRegistration: Yup.string(),
        companyName: Yup.string(),
        phone: Yup.number().required() ,
        gender: Yup.string().required(),
        birth: Yup.string().required().typeError(),
        cep: Yup.string().required().typeError(),
        address: Yup.string().required(),
        number: Yup.number().required().typeError(),
        complement: Yup.string().required(),
        referency: Yup.string().required(),
        neighborhood: Yup.string().required(),
        city: Yup.string().required(),
        state: Yup.string().required()
    })

    if(! await schema.isValid(user)) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Erro na validação'
      }, HttpStatus.BAD_REQUEST)      
    }     

    const { email, password } = user

    const findUser = await this.usersRepositoy.findOne({ email })

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

    console.log(token)
 
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

  async update(id: number, user: IUserUpdateDTO): Promise<UpdateResult> {
    const schema = Yup.object().shape({
      name: Yup.string().min(5),
      email: Yup.string().email(),
      password: Yup.string().min(6)
    })

    if(! await schema.isValid(user)) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Validation Error'
      }, HttpStatus.BAD_REQUEST)    
    } 

    const userData = await this.usersRepositoy.update(id, user)

    return userData
  }
}
