import { NotFoundException } from '@nestjs/common';

export class ChatNotFoundException extends NotFoundException {
  constructor() {
    super('Chat not found');
  }
}
