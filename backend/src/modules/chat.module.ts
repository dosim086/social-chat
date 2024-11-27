import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatController } from '../controllers';
import { ChatModel, ChatModelSchema } from '../schemas/model';
import { ChatService } from '../services';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ChatModel.name, schema: ChatModelSchema },
    ]),
  ],
  controllers: [ChatController],
  providers: [ChatService],
  exports: [ChatService],
})
export class ChatModule {}
