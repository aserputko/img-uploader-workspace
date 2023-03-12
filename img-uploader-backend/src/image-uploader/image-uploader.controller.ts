import {
  Controller,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Image } from './image-uploader.model';
import { ImageUploaderUseCases } from './image-uploader.usecases';

export class SampleDto {
  name: string;
}

@Controller('/image')
export class ImageUploaderController {
  constructor(private readonly imageUploaderUseCases: ImageUploaderUseCases) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 1 }),
        ],
      }),
    )
    file: Express.Multer.File,
  ): Promise<Image> {
    return await this.imageUploaderUseCases.uploadImage(file);
  }
}
