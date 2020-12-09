import { Controller, Get } from '@nestjs/common';
import { Nest1Service } from './nest-1.service';

@Controller()
export class Nest1Controller {
  constructor(private readonly nest1Service: Nest1Service) {}

  @Get()
  getHello(): string {
    return this.nest1Service.getHello();
  }
}
