import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MessageDocument = HydratedDocument<Message>;

@Schema()
export class Message {
  @Prop({ required: true })
  chatId: string;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  text: number;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
