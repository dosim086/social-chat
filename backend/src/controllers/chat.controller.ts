import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ZodValidate } from '../common';
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

  @Get(':id')
  getChat(@Param('id') id: string) {
    return this.chatService.findChatById(id);
  }

  @Post()
  @ZodValidate(createChatRequestSchema)
  createChat(@Body() newChat: CreateChatRequest) {
    this.chatService.createChat(newChat);
  }
}
