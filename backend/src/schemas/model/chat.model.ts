import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { BaseModel } from './base.model';
import { UserModel } from './user.model';

export type ChatDocument = HydratedDocument<ChatModel>;

@Schema({
  collection: 'chats',
})
export class ChatModel extends BaseModel {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, type: [SchemaTypes.ObjectId], ref: UserModel.name })
  participants: UserModel[];
}

export const ChatModelSchema = SchemaFactory.createForClass(ChatModel);
