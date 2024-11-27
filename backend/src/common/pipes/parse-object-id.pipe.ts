import {
  Injectable,
  NotAcceptableException,
  PipeTransform,
} from '@nestjs/common';
import { Types } from 'mongoose';

@Injectable()
export class ParseObjectIdPipe
  implements PipeTransform<string, Types.ObjectId>
{
  transform(value: string): Types.ObjectId {
    const isValidObjectId = Types.ObjectId.isValid(value);

    if (!isValidObjectId) {
      throw new NotAcceptableException('Invalid ObjectId');
    }

    return Types.ObjectId.createFromHexString(value);
  }
}
