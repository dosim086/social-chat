import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from '../foundation';
import { AddMessageRequest } from '../schemas/api';
import { MessageModel } from '../schemas/model';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(MessageModel.name) private messageModel: Model<MessageModel>,
  ) {}

  async addMessage(newMessage: AddMessageRequest): Promise<MessageModel> {
    const addedMessage = new this.messageModel(newMessage);
    return await addedMessage.save();
  }

  getAllMessagesByChat(chatId: ObjectId): Promise<MessageModel[]> {
    return this.messageModel.find({ chatId });
  }
}
