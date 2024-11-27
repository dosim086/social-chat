import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateChatRequest } from '../schemas/api';
import { ChatModel } from '../schemas/model';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(ChatModel.name) private chatModel: Model<ChatModel>,
  ) {}

  async createChat(createChat: CreateChatRequest): Promise<ChatModel> {
    const newChat = new this.chatModel(createChat);
    return await newChat.save();
  }

  async findChatById(chatId: string): Promise<ChatModel | null> {
    return await this.chatModel.findById(chatId);
  }

  findAllChats(): Promise<ChatModel[]> {
    return this.chatModel.find();
  }
}
