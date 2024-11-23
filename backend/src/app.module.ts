import { Module } from '@nestjs/common';
import { ChatsController } from './chats/chats.controller.js';

@Module({
  imports: [],
  controllers: [ChatsController],
  providers: [],
})
export class AppModule {}
