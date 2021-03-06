import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ContentTag {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  code: string;

  @Field({ nullable: true })
  published: boolean;

  @Field(() => Int, { nullable: true })
  order: number;
}

@InputType()
export class ContentTagInputCreate {
  @Field()
  title: string;

  @Field({ nullable: true })
  description: string;

  @Field()
  code: string;

  @Field()
  published: boolean;

  @Field(() => Int, { nullable: true })
  order: number;
}

@InputType()
export class ContentTagInputUpdate {
  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  code: string;

  @Field({ nullable: true })
  published: boolean;

  @Field(() => Int, { nullable: true })
  order: number;
}
