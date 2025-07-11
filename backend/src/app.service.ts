import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getProductsFromDb() {
    return 'Hello World!';
  }
}
