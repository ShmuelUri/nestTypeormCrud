import { Module } from '@nestjs/common';
import { AutherService } from './auther.service';
import { AutherController } from './auther.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Auther} from './auther.entity'



@Module({
  imports:[TypeOrmModule.forFeature([Auther])],
  controllers: [AutherController],
  providers: [AutherService, TypeOrmModule]
})

export class AutherModule {}
