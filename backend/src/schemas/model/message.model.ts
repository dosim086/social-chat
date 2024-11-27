import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MessageDocument = HydratedDocument<MessageModel>;

@Schema()
export class MessageModel {
  @Prop({ required: true })
  chatId: string;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  text: number;
}

export const MessageModelSchema = SchemaFactory.createForClass(MessageModel);
