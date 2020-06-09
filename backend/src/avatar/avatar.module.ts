import { Module } from '@nestjs/common';
import { AvatarController } from './avatar.controller';
import { AvatarService } from './avatar.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { MulterModule  }  from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { Avatar } from '../entities/avatar.entity'
import { resolve, extname } from 'path'
import * as crypto from 'crypto'

@Module({
  imports: [
    TypeOrmModule.forFeature([Avatar]),
    MulterModule.register({   
    storage: diskStorage({
      destination: (req, file, cb) => {
        cb(null, resolve(__dirname, '..', '..', 'tmp', 'uploads'))
      },
      filename: (req, file, cb) => {
        cb(null, `${crypto.randomBytes(10).toString('Hex')}${extname(file.originalname)}`)
      }
    })
  })],
  controllers: [AvatarController],
  providers: [AvatarService]
})
export class AvatarModule {}
