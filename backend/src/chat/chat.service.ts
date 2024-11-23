import { Injectable } from '@nestjs/common';
import { Chat } from './types/chat.js';

@Injectable()
export class ChatService {
  private readonly chats: Chat[] = [];

  create(chat: Chat) {
    console.log('Created');
    this.chats.push(chat);
  }

  findAll(): Chat[] {
    return this.chats;
  }
}
