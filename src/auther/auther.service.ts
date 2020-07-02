import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import {Auther} from './auther.entity'
import { Repository } from 'typeorm';

@Injectable()
export class AutherService  extends TypeOrmCrudService<Auther>{
    constructor(@InjectRepository(Auther) repo: Repository<Auther>) {
        super(repo);
      }

}
