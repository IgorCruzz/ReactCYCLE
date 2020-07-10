import { Controller, Post,   Body } from '@nestjs/common';
import { ContactService } from './contact.service'; 
import { ContactDTO } from './contact.dto'

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService){}

  @Post()
  store(@Body() contact: ContactDTO): Promise<ContactDTO>{
    return this.contactService.store(contact)
  }

}
