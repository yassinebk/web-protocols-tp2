import { Module } from '@nestjs/common';
import { TodoControllerV2 } from './todo-v2.controller';
import { TodoControllerV1 } from './todo-v1.controller';
import { TodoService } from './todo.service';
import { CommonModule } from '../common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import TodoEntity from './todo.entity';

@Module({
  controllers: [TodoControllerV2, TodoControllerV1],
  imports: [TypeOrmModule.forFeature([TodoEntity]), CommonModule],
  providers: [TodoService],
})
export class TodoModule {}
