import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

const IMG_API_KEY = '17608775c0422cda8509713763add5d4';
const IMG_API_ENDPOINT = 'https://api.imgbb.com/1/upload';

@Injectable()
export class FileStorageService {
  constructor(private readonly httpService: HttpService) {}

  async uploadFile(file: Express.Multer.File): Promise<any> {
    const formData = new FormData();
    formData.append('image', file.buffer.toString('base64'));

    const { data: imageData } = await firstValueFrom(
      this.httpService.post(`${IMG_API_ENDPOINT}?expiration=600&key=${IMG_API_KEY}`, formData).pipe(
        catchError((error: AxiosError) => {
          throw error;
        }),
      ),
    );

    return imageData.data.url;
  }
}
