import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from '../foundation';
import { CreateUserRequest } from '../schemas/api';
import { UserModel } from '../schemas/model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel.name) private userModel: Model<UserModel>,
  ) {}

  async createUser(createUser: CreateUserRequest): Promise<UserModel> {
    const newUser = new this.userModel(createUser);
    return await newUser.save();
  }

  async findUserById(userId: ObjectId): Promise<UserModel | null> {
    return await this.userModel.findById(userId);
  }

  findAllUsers(): Promise<UserModel[]> {
    return this.userModel.find();
  }
}
