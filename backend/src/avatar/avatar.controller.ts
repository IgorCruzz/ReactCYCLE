import { Controller, Post, UploadedFile, UseInterceptors, Req, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express'
import { Response } from 'express'
import { AvatarService } from './avatar.service';

@Controller('avatar')

export class AvatarController {
  constructor(private avatarService: AvatarService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  store(@UploadedFile() file, @Res() res: Response, ): Promise<Response> {
   return this.avatarService.store(file, res)
  }
}
