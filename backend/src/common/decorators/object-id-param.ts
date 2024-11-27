import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { ParseObjectIdPipe } from '../pipes/parse-object-id.pipe';

export const ParamObjectId = createParamDecorator(
  (name: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const value = request.params[name] as string;

    return new ParseObjectIdPipe().transform(value);
  },
);
