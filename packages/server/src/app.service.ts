import { Injectable } from '@nestjs/common';
import { sayHello } from '@cefiro/library';

@Injectable()
export class AppService {
  getHello(): string {
    return sayHello();
  }
}
