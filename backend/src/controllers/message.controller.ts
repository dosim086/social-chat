import { Body, Controller, Get, Post } from '@nestjs/common';
import { ParamObjectId, ZodValidate } from '../common';
import { ChatNotFoundException, UserNotFoundException } from '../errors';
import { ObjectId } from '../foundation';
import { AddMessageRequest, addMessageRequestSchema } from '../schemas/api';
import { ChatService, MessageService } from '../services';

@Controller('messages')
export class MessageController {
  constructor(
    private readonly chatService: ChatService,
    private readonly messageService: MessageService,
  ) {}

  @Get(':chatId')
  async getMessages(@ParamObjectId('chatId') chatId: ObjectId) {
    const chat = await this.chatService.findChatById(chatId);

    if (!chat) {
      throw new ChatNotFoundException();
    }

    const messages = await this.messageService.getAllMessagesByChat(chatId);

    return { messages };
  }

  @Post()
  @ZodValidate(addMessageRequestSchema)
  async addMessage(@Body() newMessage: AddMessageRequest) {
    const chatId = newMessage.chatId as unknown as ObjectId;
    const chat = await this.chatService.findChatById(chatId);

    if (!chat) {
      throw new ChatNotFoundException();
    }

    const userId = newMessage.userId as unknown as ObjectId;
    const user = await this.chatService.findChatById(userId);

    if (!user) {
      throw new UserNotFoundException();
    }

    await this.messageService.addMessage(newMessage);
  }
}
