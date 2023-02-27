import {
  Body, Controller, Delete, Get, HttpException, Param, Patch, Post, Put, Query
} from '@nestjs/common';
import { FilterTodoPaginatedDto } from './dto/filter-todo.dto';
import { NewTodoDTO } from './dto/new-todo.dto';
import { UpdatedTodoDto } from './dto/updated-todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todosService: TodoService) { }

  @Get()
  getTodos(@Query() filterTodoDto: FilterTodoPaginatedDto) {
    return this.todosService.findAll(filterTodoDto);
  }

  @Post()
  addTodo(@Body() newTodoBody: NewTodoDTO) {
    if (!newTodoBody.name || !newTodoBody.description) {
      throw new HttpException('Bad request', 400);
    }

    return this.todosService.create(newTodoBody);
  }

  @Get(':id')
  getTodo(@Param('id') id: string) {
    return this.todosService.findOne(
      id,
    );
  }

  @Delete(':id')
  deleteTodo(@Query('soft') soft: string, @Param('id') id: string) {
    return this.todosService.deleteTodo(id, soft !== undefined);
  }

  @Put(':id')
  updateTodo(@Param('id') id: string, @Body() todoUpdatedData: UpdatedTodoDto) {
    return this.todosService.updateTodo(id, todoUpdatedData);
  }

  @Patch(':id')
  restoreTodo(@Param('id') id: string) {
    return this.todosService.restoreTodo(id);
  }

  @Get('count/:state')
  countTodos(@Param('state') state: string) {
    return this.todosService.countType(state);
  }
}
