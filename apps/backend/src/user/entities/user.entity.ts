import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => String, { description: 'id of the user' })
  id: string;

  @Field(() => String, { description: 'first name of the user' })
  firstName: string;

  @Field(() => String, { description: 'last name of the user', nullable: true })
  lastName?: string;

  @Field(() => String, { description: 'email field of the user' })
  email: string;
}
