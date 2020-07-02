import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import {Book} from './Book.entity'
import { Repository } from 'typeorm';

@Injectable()
export class BookService  extends TypeOrmCrudService<Book>{
    constructor(@InjectRepository(Book) repo: Repository<Book>) {
        super(repo);
      }

}

