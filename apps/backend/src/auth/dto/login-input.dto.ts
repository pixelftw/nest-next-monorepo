import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LoginInput {
  @Field(() => String, {
    description: 'email of the user and it must be a unique value',
  })
  email: string;

  @Field(() => String, {
    description: 'a secure password of the user account',
  })
  password: string;
}
