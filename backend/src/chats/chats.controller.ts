import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateChatDto } from '../dto/create-chat.dto.js';

@Controller('chats')
export class ChatsController {
  @Get()
  getChats(@Req() request: Request) {
    return [];
  }

  @Get(':id')
  getChat(@Param('id') id: string) {
    return id;
  }

  @Post()
  createChat(@Body() createCatDto: CreateChatDto) {
    console.log({ createCatDto });
  }
}
