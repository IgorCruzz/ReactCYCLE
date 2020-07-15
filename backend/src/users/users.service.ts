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
        confirmEmail: Yup.string().oneOf([Yup.ref('email')], 'E-mails dont match').required(),
        password: Yup.string().min(6).required(),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords dont match').required(),
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
        error: 'This e-mail has been already registered'
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
    return await this.usersRepositoy.find()
  }

  async show(id: number): Promise<IUserDTO>{

    return await this.usersRepositoy.findOne({ id })
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
