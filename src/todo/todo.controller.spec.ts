import { Test, TestingModule } from '@nestjs/testing';
import { TodoControllerV2 } from './todo-v2.controller';

describe('TodoModuleController', () => {
  let controller: TodoControllerV2;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoControllerV2],
    }).compile();

    controller = module.get<TodoControllerV2>(TodoControllerV2);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
