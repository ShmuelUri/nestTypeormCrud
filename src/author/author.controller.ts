import { Controller } from '@nestjs/common';
import {AuthorService} from './author.service';
import { Crud, CrudController } from "@nestjsx/crud";
import {Author} from './author.entity';
import { ApiTags } from '@nestjs/swagger';

@Crud({
    model: {
      type: Author
    },
    query:{
      join:{
        books: {
          allow: ['id', 'name'],
        }
      }
    }
  })
@Controller('author')
@ApiTags('author')
export class AuthorController implements CrudController<Author>{
    constructor(public service: AuthorService) {}

}
