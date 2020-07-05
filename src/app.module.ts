import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { BookModule } from './book/book.module';
import { AuthorModule } from './author/author.module';
import { CategoryModule } from './category/category.module';
import { DefaultAdminModule} from 'nestjs-admin';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    BookModule,
    AuthorModule,
    CategoryModule,
    DefaultAdminModule,
   ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    constructor(private connection: Connection) {}
}
