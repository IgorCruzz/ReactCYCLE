import { Connection } from 'typeorm'
import { Module } from '@nestjs/common'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/user.module'
import { SessionModule } from './session/session.module';
import { AvatarModule } from './avatar/avatar.module'
import { TokenModule } from './token/token.module';
import { ProductModule } from './product/product.module';
import { ContactModule } from './contact/contact.module';
 
 


@Module({
  imports: [
    TypeOrmModule.forRoot(), UsersModule, SessionModule, TokenModule, ProductModule, AvatarModule, ContactModule 
  ] 
})
export class AppModule {
  constructor(private connection: Connection) {}
}
