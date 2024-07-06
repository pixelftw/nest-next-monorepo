import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const GetCurrentUser = createParamDecorator(
  (data: string | undefined, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);

    if (data === 'id') {
      return ctx.getContext().req.user['sub'];
    } else if (data) {
      return ctx.getContext().req.user[data];
    }
    return ctx.getContext().req.user;
  },
);
