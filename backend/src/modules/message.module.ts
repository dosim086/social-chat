import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageController } from '../controllers';
import { MessageModel, MessageModelSchema } from '../schemas/model';
import { MessageService } from '../services';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MessageModel.name, schema: MessageModelSchema },
    ]),
  ],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
