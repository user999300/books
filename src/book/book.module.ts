import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from './book.model';

@Module({
  providers: [BookService],
  controllers: [BookController],
  imports: [SequelizeModule.forFeature([Book])]
})
export class BookModule { }
