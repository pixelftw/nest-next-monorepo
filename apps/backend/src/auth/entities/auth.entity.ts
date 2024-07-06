import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Auth {
  @Field(() => String, { description: 'auth token' })
  accessToken: string;
  @Field(() => String, { description: 'refresh token' })
  refreshToken: string;
}
