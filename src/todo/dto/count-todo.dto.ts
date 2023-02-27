import { IsEnum } from 'class-validator';
import { WRONG_TODO_STATUS_STRING } from 'src/common/errors';
import { TodoStatusEnum } from '../todo.entity';

export class CountTodosDto {
  @IsEnum(TodoStatusEnum, { message: WRONG_TODO_STATUS_STRING('state') })
  state: TodoStatusEnum;
}
