import { SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import { Sequelize } from 'sequelize-typescript';
import { BookController } from './book.controller';
import { Book } from './book.model';
import { BookModule } from './book.module';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
// import { describe, it} from 'jest'
describe('BookController', () => {
  let bookController: BookController;
  let spyService: BookService;
  beforeAll(async () => {
    const ApiServiceProvider = {
      provide: BookService,
      useFactory: () => ({
        createBook: jest.fn(() => { }),
        getBooks: jest.fn(() => [])
      })
    }

    const app: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
      providers: [BookService, ApiServiceProvider]
    }).compile()

    bookController = app.get<BookController>(BookController)
    spyService = app.get<BookService>(BookService)


  })
  it('Calling create book', () => {
    const dto = new CreateBookDto();
    bookController.createBook(dto);
    expect(spyService.createBook).toHaveBeenCalled();
    expect(spyService.createBook).toHaveBeenCalledWith(dto)
  })

  it("Calling getBooks method", () => {
    bookController.getBooks();
    expect(spyService.getBooks).toHaveBeenCalled();
  })

});
