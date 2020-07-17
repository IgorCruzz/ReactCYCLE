import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { TokenController } from './token.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Token } from '../entities/token.entity';
import { UsersModule } from '../users/user.module';
import { forwardRef } from '@nestjs/common';
@Module({
  imports: [forwardRef(() => UsersModule), TypeOrmModule.forFeature([Token])],
  providers: [TokenService],
  controllers: [TokenController],
  exports: [TypeOrmModule],
})
export class TokenModule {}
