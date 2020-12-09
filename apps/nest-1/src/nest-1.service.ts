import { Injectable } from '@nestjs/common';

@Injectable()
export class Nest1Service {
  getHello(): string {
    return 'Hello World!';
  }
}
