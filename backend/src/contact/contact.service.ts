import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Contact  } from '../entities/contact.entity'
import { IContactDTO } from './contact.dto'

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>
  ){}


  async store(contact: IContactDTO): Promise<IContactDTO> {
    return await this.contactRepository.save(contact)
  }
}

