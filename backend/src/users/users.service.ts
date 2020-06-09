import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, getRepository } from 'typeorm'
import { User } from '../entities/user.entity'
import { Token } from '../entities/token.entity'
import { Request, Response} from 'express'
import * as Yup from 'yup'
import { hashSync } from 'bcrypt'
import RegisterMail from '../jobs/RegisterMail'
import * as crypto from 'crypto'
 

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepositoy: Repository<User>,    
    @InjectRepository(Token)
    private tokenRepository: Repository<Token>
  ) {}
  
  async store(req: Request, res: Response): Promise<Response> {
    const schema = Yup.object().shape({
      name: Yup.string().required().min(5).max(10),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(7)
    })

    if(! await schema.isValid(req.body)) {
      return res.status(400).json({ error: 'Erro na validação'})
    }     

    const { email, password } = req.body

    const findUser = await this.usersRepositoy.findOne({ where: { email }})

    if(findUser) {
      return res.status(400).json({ error: 'Este e-mail já está cadastrado no sistema'})
    }

    const hashPassword = hashSync(password, 8)

    const user = await this.usersRepositoy.save({
      ...req.body,
      password: hashPassword
    })
 
    const token =  await this.tokenRepository.save({
      user_id: user.id,
      token: crypto.randomBytes(16).toString('hex')
    })
 
    await RegisterMail.handle(token)
    
    return res.json(user)
  }

  async index(req: Request, res: Response): Promise<Response> {
    
    const users = await this.usersRepositoy.find()

   

    return res.json(users)
  }

  async show(req: Request, res: Response): Promise<Response>{
    const { id } = req.params

    const user = await this.usersRepositoy.findOne({ where: { id: id }})
    return res.json(user)
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    await this.usersRepositoy.delete(id)

    return res.json()
  }

  async update(req: Request, res: Response): Promise<Response> {
    const schema = Yup.object().shape({
      name: Yup.string().min(5),
      email: Yup.string().email(),
      password: Yup.string().min(6)
    })

    if(! await schema.isValid(req.body)) {
      return res.status(400).json({ error: 'Erro na validação'})
    }

    const { id } = req.params

    const user = await this.usersRepositoy.update(id, req.body)

    return res.json(user)
  }
}
