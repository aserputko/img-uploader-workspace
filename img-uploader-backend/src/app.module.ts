import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ImageUseCases } from './domain/image.usecases';
import { FileStorageService } from './infrastructure/file-storage.service';
import { ImageController } from './presentation/image.controller';

@Module({
  imports: [HttpModule],
  controllers: [ImageController],
  providers: [ImageUseCases, FileStorageService],
})
export class AppModule {}
