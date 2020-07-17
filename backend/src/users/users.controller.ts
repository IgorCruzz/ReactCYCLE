import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { IUserDTO, IUserUpdateDTO } from './users.dto';
import { UpdateResult, DeleteResult } from 'typeorm';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  store(@Body() user: IUserDTO): Promise<IUserDTO> {
    return this.usersService.store(user);
  }

  @Get()
  index(): Promise<IUserDTO[]> {
    return this.usersService.index();
  }

  @Get(':id')
  show(@Param() id: number): Promise<IUserDTO> {
    return this.usersService.show(id);
  }

  @Delete(':id')
  delete(@Param() id: number): Promise<DeleteResult> {
    return this.usersService.delete(id);
  }

  @Put(':id')
  update(
    @Param() id: number,
    @Body() user: IUserUpdateDTO,
  ): Promise<UpdateResult> {
    return this.usersService.update(id, user);
  }
}
