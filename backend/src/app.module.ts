import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/test'), CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
