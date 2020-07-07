import { Controller } from '@nestjs/common';
import {BookService} from './book.service';
import { Crud, CrudController } from "@nestjsx/crud";
import { ApiTags } from '@nestjs/swagger';
import {Book} from './book.entity';

@Crud({
    model: {
      type: Book
     } ,
     routes:{
      deleteOneBase:{returnDeleted: true}
     },
     query:{
       join:{
          categories:{
              eager: true,
              allow: ['name', 'id']
          },
          author:{
              eager: true,
              exclude: ['create_at', 'updated_at']
          },       
       },
           
     }
    })

@Controller('book')
@ApiTags('book')
export class BookController implements CrudController<Book>{
    constructor(public service: BookService) {}

}

