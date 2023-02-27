import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
import {
  NOT_INT,
  NOT_STRING_ERROR,
  WRONG_TODO_STATUS_STRING,
} from 'src/common/errors';
import { TodoStatusEnum } from '../todo.entity';

export class Pagination {
  @IsOptional()
  @IsInt({ message: NOT_INT('limit') })
  limit?: number;

  @IsOptional()
  @IsInt({ message: NOT_INT('limit') })
  offset?: number;
}

export class FilterTodoPaginatedDto extends Pagination {
  @IsOptional()
  @IsString({ message: NOT_STRING_ERROR('criteria') })
  criteria?: string;

  @IsOptional()
  @IsEnum(TodoStatusEnum, { message: WRONG_TODO_STATUS_STRING('status') })
  status?: TodoStatusEnum;
}
