import { Module } from '@nestjs/common';
import { AvatarController } from './avatar.controller';
import { AvatarService } from './avatar.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { MulterModule  }  from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { Avatar } from '../entities/avatar.entity'
import { resolve, extname } from 'path'
import * as crypto from 'crypto'
import * as aws from 'aws-sdk'
import multerS3 from 'multer-s3'

const storageTypes ={
  storage: diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'tmp', 'uploads'))
    },
    filename: (req, file, cb) => {
      cb(null, `${crypto.randomBytes(10).toString('Hex')}${extname(file.originalname)}`)
    }
  }),
  s3: multerS3({
    s3: new aws.S3(),
    bucket: 'reactcycle',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (req, file, cb) => {
      cb(null, `${crypto.randomBytes(10).toString('Hex')}${extname(file.originalname)}`)
    }
  })
} 

@Module({
  imports: [
    TypeOrmModule.forFeature([Avatar]),
    MulterModule.register({   
    storage: storageTypes["s3"]
  })],
  controllers: [AvatarController],
  providers: [AvatarService]
})
export class AvatarModule {}
