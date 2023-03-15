import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModulesModule } from './book/modules/modules.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [ModulesModule, BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
