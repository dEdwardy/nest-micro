import { Module } from '@nestjs/common';
import { Nest1Controller } from './nest-1.controller';
import { Nest1Service } from './nest-1.service';

@Module({
  imports: [],
  controllers: [Nest1Controller],
  providers: [Nest1Service],
})
export class Nest1Module {}
