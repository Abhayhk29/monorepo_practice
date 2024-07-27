import { Injectable } from '@nestjs/common';
import {sum} from "@autospace/sample-lib"
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!' + sum(34,454);
  }
}
