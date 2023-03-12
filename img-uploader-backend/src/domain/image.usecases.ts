import { Injectable } from '@nestjs/common';
import { FileStorageService } from '../infrastructure/file-storage.service';
import { Image } from './image.model';

@Injectable()
export class ImageUseCases {
  constructor(private readonly fileStorageService: FileStorageService) {}

  async uploadImage(file: Express.Multer.File): Promise<Image> {
    const imgURL = await this.fileStorageService.uploadFile(file);
    return imgURL;
  }
}
