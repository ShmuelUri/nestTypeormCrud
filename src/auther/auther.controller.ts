import { Controller } from '@nestjs/common';
import {AutherService} from './auther.service';
import { Crud, CrudController } from "@nestjsx/crud";
import {Auther} from './auther.entity'

@Crud({
    model: {
      type: Auther
    }
  })
@Controller('auther')
export class AutherController implements CrudController<Auther>{
    constructor(public service: AutherService) {}

}
