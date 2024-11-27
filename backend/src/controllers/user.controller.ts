import { Body, Controller, Get, NotFoundException, Post } from '@nestjs/common';
import { ParamObjectId, ZodValidate } from '../common';
import { ObjectId } from '../foundation';
import { CreateUserRequest, createUserRequestSchema } from '../schemas/api';
import { UserService } from '../services';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers() {
    const users = await this.userService.findAllUsers();

    return { users };
  }

  @Get(':userId')
  async getUser(@ParamObjectId('userId') userId: ObjectId) {
    const user = await this.userService.findUserById(userId);

    if (!user) {
      throw new NotFoundException();
    }

    return { user };
  }

  @Post()
  @ZodValidate(createUserRequestSchema)
  async createUser(@Body() newUser: CreateUserRequest) {
    await this.userService.createUser(newUser);
  }
}
