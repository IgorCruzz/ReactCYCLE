import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, getRepository } from 'typeorm'
import { Avatar } from '../entities/avatar.entity'
import { Response } from 'express'
import {getConnection} from "typeorm";
@Injectable()
export class AvatarService {
  constructor(
    @InjectRepository(Avatar)
    private avatarRepository: Repository<Avatar>
  ) {}
  
  async store(file: any, res: Response) { 
      
    const { filename: name, size, mimetype } = file

    if (size >= 1000000 ) {
      return res.status(400).json({ error: 'Escolha uma foto com tamanho máximo de 1mb' })
    }

    if(mimetype !== 'image/jpeg' && mimetype !== 'image/png') {
      return res.status(400).json({ error: 'Insira uma imagem em PNG ou JPEG' })
    }
  
    const avatar = await this.avatarRepository.save({
      name
    })   
 
    return res.json({       
        avatar,
        url: `http://localhost:3333/file/${name}`      
    })
  }
}
 
 