import { Controller } from '@nestjs/common';
import {BookService} from './book.service';
import { Crud, CrudController } from "@nestjsx/crud";
import { ApiTags } from '@nestjs/swagger';
import {Book} from './book.entity';

@Crud({
    model: {
      type: Book
     }  
  })

@Controller('book')
@ApiTags('book')
export class BookController implements CrudController<Book>{
    constructor(public service: BookService) {}

}

