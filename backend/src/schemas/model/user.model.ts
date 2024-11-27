import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseModel } from './base.model';

export type UserDocument = HydratedDocument<UserModel>;

@Schema({
  collection: 'users',
})
export class UserModel extends BaseModel {
  @Prop({ required: true })
  username: string;
}

export const UserModelSchema = SchemaFactory.createForClass(UserModel);
