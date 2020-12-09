import { Test, TestingModule } from '@nestjs/testing';
import { Nest1Controller } from './nest-1.controller';
import { Nest1Service } from './nest-1.service';

describe('Nest1Controller', () => {
  let nest1Controller: Nest1Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Nest1Controller],
      providers: [Nest1Service],
    }).compile();

    nest1Controller = app.get<Nest1Controller>(Nest1Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(nest1Controller.getHello()).toBe('Hello World!');
    });
  });
});
