import { Body, Controller, Get, NotFoundException, Post } from '@nestjs/common';
import { ParamObjectId, ZodValidate } from '../common';
import { ObjectId } from '../foundation';
import { CreateChatRequest, createChatRequestSchema } from '../schemas/api';
import { ChatService } from '../services';

@Controller('chats')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get()
  async getChats() {
    const chats = await this.chatService.findAllChats();

    return { chats };
  }

  @Get(':chatId')
  async getChat(@ParamObjectId('chatId') chatId: ObjectId) {
    const chat = await this.chatService.findChatById(chatId);

    if (!chat) {
      throw new NotFoundException();
    }

    return { chat };
  }

  @Post()
  @ZodValidate(createChatRequestSchema)
  async createChat(@Body() newChat: CreateChatRequest) {
    await this.chatService.createChat(newChat);
  }
}
