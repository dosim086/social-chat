import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
} from '@nestjs/common';
import { ZodValidationPipe } from '../common/validation.pipe.js';
import { createChatSchema } from '../schemas/create-chat.js';
import { ChatService } from './chat.service.js';
import { CreateChatDto } from './dto/create-chat.dto.js';
import { Chat } from './types/chat.js';

@Controller('chats')
export class ChatController {
  constructor(private readonly chatsService: ChatService) {}

  @Get()
  async getChats(): Promise<Chat[]> {
    // throw new ForbiddenException();

    return this.chatsService.findAll();
  }

  @Get(':id')
  getChat(@Param('id', ParseIntPipe) id: string) {
    return id;
  }

  @Post()
  @UsePipes(new ZodValidationPipe(createChatSchema))
  createChat(@Body() createCatDto: CreateChatDto) {
    this.chatsService.create(createCatDto);
  }
}
