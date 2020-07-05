import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Category} from './category.entity';
import { DefaultAdminSite ,  DefaultAdminModule } from 'nestjs-admin';


@Module({
  imports: [TypeOrmModule.forFeature([Category]),  DefaultAdminModule],
  controllers: [CategoryController],
  providers: [CategoryService, TypeOrmModule]
})

export class CategoryModule {
  constructor(private readonly adminSite: DefaultAdminSite) {
      adminSite.register('Category', Category)
  }
 
}
