import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Book} from './book.entity';
import {  DefaultAdminModule, DefaultAdminSite } from 'nestjs-admin';



@Module({
  imports:[TypeOrmModule.forFeature([Book]),  DefaultAdminModule],
  controllers: [BookController],
  providers: [BookService, TypeOrmModule]
})

export class BookModule {
  constructor(private readonly adminSite: DefaultAdminSite) {
    adminSite.register('Book', Book)}
  
}
