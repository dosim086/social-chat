import { Body, Controller, Get, Post } from '@nestjs/common';
import { ParamObjectId, ZodValidate } from '../common';
import { ObjectId } from '../foundation';
import { CreateChatRequest, createChatRequestSchema } from '../schemas/api';
import { ChatModel } from '../schemas/model';
import { ChatService } from '../services';

@Controller('chats')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get()
  getChats(): Promise<ChatModel[]> {
    return this.chatService.findAllChats();
  }

  @Get(':chatId')
  getChat(@ParamObjectId('chatId') chatId: ObjectId) {
    return this.chatService.findChatById(chatId);
  }

  @Post()
  @ZodValidate(createChatRequestSchema)
  createChat(@Body() newChat: CreateChatRequest) {
    this.chatService.createChat(newChat);
  }
}
