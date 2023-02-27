import { TodoStatusEnum } from '../todo.entity';

export type UpdatedTodoDto = {
  name: string;
  description: string;
  status: TodoStatusEnum;
};
