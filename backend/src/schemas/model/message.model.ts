import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { BaseModel } from './base.model';
import { ChatModel } from './chat.model';
import { UserModel } from './user.model';

export type MessageDocument = HydratedDocument<MessageModel>;

@Schema({
  collection: 'messages',
})
export class MessageModel extends BaseModel {
  @Prop({ required: true, ref: ChatModel.name })
  chatId: Types.ObjectId;

  @Prop({ required: true, ref: UserModel.name })
  userId: Types.ObjectId;

  @Prop({ required: true })
  text: string;
}

export const MessageModelSchema = SchemaFactory.createForClass(MessageModel);
