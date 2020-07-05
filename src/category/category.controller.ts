import { Controller } from '@nestjs/common';
import {CategoryService} from './category.service';
import { Crud, CrudController } from "@nestjsx/crud";
import {Category} from './category.entity';
import { ApiTags } from '@nestjs/swagger';


@Crud({
    model: {
      type: Category
    }
  })
@Controller('category')
@ApiTags('category')
export class CategoryController implements CrudController<Category>{
    constructor(public service: CategoryService) {}

}
