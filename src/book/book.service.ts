import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from './book.model';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BookService {


    constructor(@InjectModel(Book) private bookEntity: typeof Book) { }

    async createBook(dto: CreateBookDto): Promise<Book> {
        const book = await this.bookEntity.create(dto)
        return book
    }

    async getBooks({ limit = 5, offset = 0 }): Promise<Book[]> {
        const books = await this.bookEntity.findAll({
            limit: limit || 5,
            offset: offset || 0
        })
        return books
    }
}
