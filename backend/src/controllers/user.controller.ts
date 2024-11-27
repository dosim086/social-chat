import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ParseObjectIdPipe, ZodValidate } from '../common';
import { ObjectId } from '../foundation';
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

  @Get(':userId')
  getUser(@Param('id', ParseObjectIdPipe) userId: ObjectId) {
    return this.userService.findUserById(userId);
  }

  @Post()
  @ZodValidate(createUserRequestSchema)
  createUser(@Body() newUser: CreateUserRequest) {
    this.userService.createUser(newUser);
  }
}
