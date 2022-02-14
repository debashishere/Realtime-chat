import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './shared/services/config.service';
import { apiModule } from './api/api.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    apiModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
