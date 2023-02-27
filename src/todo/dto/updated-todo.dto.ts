import { IsEnum, IsOptional, IsString, MinLength } from 'class-validator';
import {
  MIN_LENGTH_ERROR,
  NOT_STRING_ERROR,
  WRONG_TODO_STATUS_STRING,
} from 'src/common/errors';
import { TodoStatusEnum } from '../todo.entity';

export class UpdatedTodoDto {
  @IsOptional()
  @MinLength(10, { message: MIN_LENGTH_ERROR('name', 10) })
  @IsString({ message: NOT_STRING_ERROR('name') })
  name: string;

  @IsOptional()
  @MinLength(10, { message: MIN_LENGTH_ERROR('name', 10) })
  @IsString({ message: NOT_STRING_ERROR('name') })
  description: string;

  @IsOptional()
  @IsEnum(TodoStatusEnum, { message: WRONG_TODO_STATUS_STRING('status') })
  status: TodoStatusEnum;
}
