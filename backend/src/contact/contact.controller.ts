import { Controller, Post, Body } from '@nestjs/common';
import { ContactService } from './contact.service';
import { IContactDTO } from './contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Post()
  store(@Body() contact: IContactDTO): Promise<IContactDTO> {
    return this.contactService.store(contact);
  }
}
