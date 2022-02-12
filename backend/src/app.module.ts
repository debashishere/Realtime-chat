import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ChatModule } from './api/chat/chat.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './shared/services/config.service';
@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    ChatModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
