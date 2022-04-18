import { Test, TestingModule } from '@nestjs/testing';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';

class ApiServiceMock {

  createBook(dto: CreateBookDto) {
    return {};
  }

  getBooks() {
    return []
  }
}
describe.only("BookService", () => {

  let bookService: BookService;

  beforeAll(async () => {
    const ApiServiceProvider = {
      provide: BookService,
      useClass: ApiServiceMock,
    }
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookService, ApiServiceProvider
      ],
    }).compile();
    bookService = module.get<BookService>(BookService);
  })

  it('should call createBook method with expected params', async () => {
    const createBookSpy = jest.spyOn(bookService, 'createBook');
    const dto = new CreateBookDto();
    bookService.createBook(dto);
    expect(createBookSpy).toHaveBeenCalledWith(dto);
  });

  it('should call getBooks', async () => {
    const getBooksSpy = jest.spyOn(bookService, 'getBooks');
    const dto = { limit: 5, offset: 4 }
    bookService.getBooks(dto);
    expect(getBooksSpy).toHaveBeenCalledWith(dto);
  });
})