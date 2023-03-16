import { Body, Controller, Get, Post } from '@nestjs/common';
import { Delete, Param, Put } from '@nestjs/common/decorators';
import { BookService } from './book.service';
import { BookDTO } from './dto/book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async createBook(@Body() data: BookDTO) {
    return this.bookService.create(data);
  }

  @Get()
  async findAllBooks() {
    return this.bookService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: BookDTO) {
    return this.bookService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.bookService.delete(id);
  }
}
