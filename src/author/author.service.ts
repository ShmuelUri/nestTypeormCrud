import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import {Author} from './author.entity'
import { Repository } from 'typeorm';

@Injectable()
export class AuthorService  extends TypeOrmCrudService<Author>{
    constructor(@InjectRepository(Author) repo: Repository<Author>) {
        super(repo);
      }

}
