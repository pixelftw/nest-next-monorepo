import { InputType, Field } from '@nestjs/graphql';
import { User } from '@prisma/client';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'email of the user' })
  email: User['email'];

  @Field(() => String, { description: 'First name of the user' })
  firstName: string;

  @Field(() => String, { description: 'last name of the user', nullable: true })
  lastName?: string;

  @Field(() => String, { description: 'password of the user', nullable: true })
  password: string;
}
