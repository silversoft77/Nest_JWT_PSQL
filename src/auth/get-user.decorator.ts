import { createParamDecorator, ExecutionContext } from '@nestjs/common';
// files
import { User } from './user.entity';

export const GetUser = createParamDecorator(
  (_data, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();

    // get user from request object (passport)
    return req.user;
  },
);
