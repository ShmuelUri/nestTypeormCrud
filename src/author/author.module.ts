import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Author} from './author.entity';
import { DefaultAdminModule, DefaultAdminSite } from 'nestjs-admin';




@Module({
  imports:[TypeOrmModule.forFeature([Author]),  DefaultAdminModule],
  controllers: [AuthorController],
  providers: [AuthorService, TypeOrmModule]
})

export class AuthorModule {
  constructor(private readonly adminSite: DefaultAdminSite) {
    adminSite.register('Author',Author)  
  }

}
