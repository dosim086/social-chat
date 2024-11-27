import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageController } from '../controllers';
import { MessageModel, MessageModelSchema } from '../schemas/model';
import { MessageService } from '../services';
import { ChatModule } from './chat.module';
import { UserModule } from './user.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MessageModel.name, schema: MessageModelSchema },
    ]),
    ChatModule,
    UserModule,
  ],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
