import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Book } from './book.model';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';

@ApiTags('Books')
@Controller('books')
export class BookController {

    constructor(private booksService: BookService) {

    }

    @ApiOperation({ summary: 'Get all books' })
    @ApiResponse({ status: 200, type: [Book] })
    @Get()
    async getBooks(@Query() params?: { limit: number, offset: number }): Promise<Book[]> {
        const books = await this.booksService.getBooks(params)
        return books
    }

    @ApiOperation({ summary: 'Create book' })
    @ApiResponse({ status: 200, type: CreateBookDto })
    @Post()
    async createBook(@Body() dto: CreateBookDto): Promise<Book> {
        const book = await this.booksService.createBook(dto)
        return book
    }
}
