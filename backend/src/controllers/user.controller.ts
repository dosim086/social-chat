import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ZodValidate } from '../common/decorators/zod-validator.js';
import { CreateUserRequest, createUserRequestSchema } from '../schemas/api';
import { UserModel } from '../schemas/model';
import { UserService } from '../services';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): Promise<UserModel[]> {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.userService.findUserById(id);
  }

  @Post()
  @ZodValidate(createUserRequestSchema)
  createUser(@Body() newUser: CreateUserRequest) {
    this.userService.createUser(newUser);
  }
}
