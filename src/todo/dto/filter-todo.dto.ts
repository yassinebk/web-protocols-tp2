export type FilterTodoDto = {
  criteria?: string;
  status?: string;
};

export type FilterTodoPaginatedDto = FilterTodoDto & {
  limit?: number;
  offset?: number;
};
