import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<UserModel>;

@Schema()
export class UserModel {
  @Prop({ required: true })
  username: string;
}

export const UserModelSchema = SchemaFactory.createForClass(UserModel);
