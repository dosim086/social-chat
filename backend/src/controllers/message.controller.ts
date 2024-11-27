import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ParseObjectIdPipe, ZodValidate } from '../common';
import { ObjectId } from '../foundation';
import { AddMessageRequest, addMessageRequestSchema } from '../schemas/api';
import { MessageModel } from '../schemas/model';
import { MessageService } from '../services';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get(':chatId')
  getMessages(
    @Param('chatId', ParseObjectIdPipe) chatId: ObjectId,
  ): Promise<MessageModel[]> {
    return this.messageService.getAllMessagesByChat(chatId);
  }

  @Post()
  @ZodValidate(addMessageRequestSchema)
  addMessage(@Body() newMessage: AddMessageRequest) {
    // TODO check existence of chat/user before adding message

    this.messageService.addMessage(newMessage);
  }
}
