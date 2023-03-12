import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ImageUploaderController } from './image-uploader/image-uploader.controller';
import { ImageUploaderGateway } from './image-uploader/image-uploader.gateway';
import { ImageUploaderUseCases } from './image-uploader/image-uploader.usecases';

@Module({
  imports: [HttpModule],
  controllers: [ImageUploaderController],
  providers: [ImageUploaderUseCases, ImageUploaderGateway],
})
export class AppModule {}
