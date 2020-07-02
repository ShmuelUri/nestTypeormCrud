import { Controller } from '@nestjs/common';
import {BookService} from './book.service';
import { Crud, CrudController } from "@nestjsx/crud";
import {Book} from './book.entity'

@Crud({
    model: {
      type: Book
    }
  })
@Controller('book')
export class BookController implements CrudController<Book>{
    constructor(public service: BookService) {}

}

