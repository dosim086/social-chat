import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ChatDocument = HydratedDocument<ChatModel>;

@Schema()
export class ChatModel {
  @Prop({ required: true, type: String })
  name: string;

  @Prop([String])
  participants: string[];
}

export const ChatModelSchema = SchemaFactory.createForClass(ChatModel);
