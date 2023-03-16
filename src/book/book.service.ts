import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prismaService';
import { BookDTO } from './dto/book.dto';

@Injectable()
export class BookService {
  constructor(private prismaService: PrismaService) {}

  async create(data: BookDTO) {
    const bookExists = await this.prismaService.book.findFirst({
      where: {
        bar_code: data.bar_code,
      },
    });

    if (bookExists) {
      throw new Error('Este livro já existe');
    }

    const book = await this.prismaService.book.create({ data });
    return book;
  }

  async findAll() {
    return this.prismaService.book.findMany();
  }

  async update(id: string, data: BookDTO) {
    const bookExists = await this.prismaService.book.findUnique({
      where: {
        id,
      },
    });

    if (!bookExists) {
      throw new Error('Esse livro não existe!');
    }
    const bookUpdate = await this.prismaService.book.update({
      data,
      where: { id },
    });
    return bookUpdate;
  }

  async delete(id: string) {
    const bookExists = await this.prismaService.book.findUnique({
      where: {
        id,
      },
    });

    if (!bookExists) {
      throw new Error('Esse livro não existe!');
    }

    await this.prismaService.book.delete({
      where: { id },
    });

    return { id: id, Message: 'Livro exluido com sucesso' };
  }
}
