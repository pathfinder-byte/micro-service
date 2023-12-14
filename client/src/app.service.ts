import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!eeeeff';
  }

  get(): boolean {
    return true;
  }
}
