import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Contact  } from '../entities/contact.entity'
import { IContactDTO } from './contact.dto'
import * as Yup from 'yup'

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>
  ){}


  async store(contact: IContactDTO): Promise<IContactDTO> {
    const schema  = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        order: Yup.string().required(),
        message: Yup.string().required(),
        phone: Yup.string().required()
    })

    if(! await schema.isValid(contact)) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Erro na validação'
      }, HttpStatus.BAD_REQUEST)
    }

    return await this.contactRepository.save(contact)
  }
}

