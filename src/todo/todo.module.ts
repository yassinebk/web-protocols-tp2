import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { CommonModule } from '../common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import TodoEntity from './todo.entity';

@Module({
  controllers: [TodoController],
  imports: [
    TypeOrmModule.forFeature([TodoEntity]),
    CommonModule,
  ],
  providers: [TodoService],
})
export class TodoModule {}
