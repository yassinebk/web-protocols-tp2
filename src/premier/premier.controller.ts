import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('premier')
class PremierController {
  @Get()
  get() {
    console.log('function `get` called !');
    return 'get';
  }

  @Post()
  post() {
    console.log('function `post` called !');
    return 'post';
  }

  @Put()
  put() {
    console.log('function `put` called !');
    return 'put';
  }

  @Delete()
  delete() {
    console.log('function `delete` called !');
    return 'delete';
  }

  @Patch()
  patch() {
    console.log('function `patch` called !');
    return 'patch';
  }
}

export default PremierController;
