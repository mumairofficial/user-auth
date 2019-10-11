import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // return this.appService.getHello();
    return 'Hello sir'
  }

  @Get('/hello')
  getHelloMe(): string {
    return 'Umair is here'
  }
}
