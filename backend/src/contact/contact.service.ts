import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Contact  } from '../entities/contact.entity'
import { ContactDTO } from './contact.dto'

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>
  ){}

  async store(contact: ContactDTO): Promise<ContactDTO> {
    const contactData = await this.contactRepository.save(contact)
    return contactData
  }
}

 