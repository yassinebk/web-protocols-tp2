import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { v4 } from 'uuid';
import { FilterTodoPaginatedDto } from './dto/filter-todo.dto';
import { NewTodoDTO } from './dto/new-todo.dto';
import { UpdatedTodoDto } from './dto/updated-todo.dto';
import { TodoEntity, TodoStatusEnum } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @Inject('UUID') private uuid: typeof v4,

    @InjectRepository(TodoEntity)
    private todoRepository: Repository<TodoEntity>,
  ) {}

  create(newTodoBody: NewTodoDTO) {
    const newTodo = this.todoRepository.create({
      id: this.uuid(),
      name: newTodoBody.name,
      description: newTodoBody.description,
    });

    return this.todoRepository.save(newTodo);
  }

  findAll(filterTodoDto: FilterTodoPaginatedDto) {
    filterTodoDto.limit = filterTodoDto.limit ?? 10;
    filterTodoDto.offset = filterTodoDto.offset ?? 0;

    const pagination = {
      take: filterTodoDto.limit,
      skip: filterTodoDto.limit * filterTodoDto.offset,
    };
    if (!filterTodoDto || (!filterTodoDto.criteria && !filterTodoDto.status)) {
      return this.todoRepository.find({ ...pagination });
    }

    //  const query=this.todoRepository.createQueryBuilder('todo')
    //   if (filterTodoDto.status)
    //     query.andWhere('todo.state = :state', {
    //       state: this.validateState(status),
    //     });
    // if (criteria)
    //   query.andWhere('todo.name = :name or todo.description= :description', {
    //
    // return query.getMany();

    return this.todoRepository.find({
      where: [
        {
          name: Like(`%${filterTodoDto.criteria}%`),
          state: this.validateState(filterTodoDto.status),
        },
        {
          description: Like(`%${filterTodoDto.criteria}%`),
          state: this.validateState(filterTodoDto.status),
        },
        // {
        //   state: this.validateState(filterTodoDto.status),
        // },
      ],
      ...pagination,
    });
  }

  countType(state?: string) {
    return this.todoRepository.count({
      where: { state: this.validateState(state) },
    });
  }

  findOne(id: string) {
    return this.todoRepository.findOneOrFail({ where: { id } });
  }

  deleteTodo(id: string, soft: boolean) {
    const todo = this.todoRepository.findOneByOrFail({ id });

    if (!todo) {
      throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
    }

    return soft
      ? this.todoRepository.softDelete(id)
      : this.todoRepository.delete(id);
  }

  async updateTodo(id: string, newTodoData: UpdatedTodoDto) {
    const todo = await this.todoRepository.findOneByOrFail({ id });

    if (!todo) {
      throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
    }

    // mass assignement TODO: Make it more secure
    todo.name = newTodoData.name;
    todo.description=newTodoData.description;
    todo.state = this.validateState(newTodoData.status)??todo.state;

    return  this.todoRepository.save(todo);
  }

  restoreTodo(id: string) {
    return this.todoRepository.restore(id);
  }

  validateState(state: string): TodoStatusEnum | undefined {
    if (!state || !['waiting', 'done', 'actif'].includes(state)) return;
    console.log(TodoStatusEnum[state]);
    return TodoStatusEnum[state];
  }
}

