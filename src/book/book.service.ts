import { Injectable } from '@nestjs/common';
import { BookDTO } from './dto/book.dto';

@Injectable()
export class BookService {
  async create(data: BookDTO) {
    
  }
}
