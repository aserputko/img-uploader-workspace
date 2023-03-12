import { Injectable } from '@nestjs/common';
import { ImageUploaderGateway } from './image-uploader.gateway';
import { Image } from './image-uploader.model';

@Injectable()
export class ImageUploaderUseCases {
  constructor(private readonly imageUploaderGateway: ImageUploaderGateway) {}

  async uploadImage(file: Express.Multer.File): Promise<Image> {
    const url = await this.imageUploaderGateway.uploadFile(file);
    return { url };
  }
}
