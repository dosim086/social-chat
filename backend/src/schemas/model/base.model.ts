import { Prop } from '@nestjs/mongoose';

export abstract class BaseModel {
  @Prop({ select: false })
  __v: string;
}
