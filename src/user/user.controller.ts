import { Controller } from '@nestjs/common';
import { Crud, CrudController } from "@nestjsx/crud";
import { ApiTags } from '@nestjs/swagger';
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Crud({
  model: {
    type: User
  },
  routes: {
    only: ["createOneBase", "updateOneBase", 'replaceOneBase'],
  },
  query:{
      allow:['id', 'user_name', 'full_name']
  }
})

@ApiTags('user')
@Controller('user')
export class UserController implements CrudController<User> {
    constructor(public readonly service: UserService) {}
}
