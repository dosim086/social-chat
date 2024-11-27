import { Body, Controller, Get, Post } from '@nestjs/common';
import { ParamObjectId, ZodValidate } from '../common';
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
  getUser(@ParamObjectId('userId') userId: ObjectId) {
    return this.userService.findUserById(userId);
  }

  @Post()
  @ZodValidate(createUserRequestSchema)
  createUser(@Body() newUser: CreateUserRequest) {
    this.userService.createUser(newUser);
  }
}
