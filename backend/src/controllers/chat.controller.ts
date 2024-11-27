import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ParseObjectIdPipe, ZodValidate } from '../common';
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
  getChat(@Param('chatId', ParseObjectIdPipe) chatId: ObjectId) {
    return this.chatService.findChatById(chatId);
  }

  @Post()
  @ZodValidate(createChatRequestSchema)
  createChat(@Body() newChat: CreateChatRequest) {
    this.chatService.createChat(newChat);
  }
}
