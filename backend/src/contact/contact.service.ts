import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Contact  } from '../entities/contact.entity'
import { Request, Response } from 'express'


@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>
  ){}

  async store(req: Request, res: Response): Promise<Response> {

    const contact = await this.contactRepository.save(req.body)
    return res.json(contact)
  }
}

 