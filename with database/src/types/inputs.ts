import { Field, InputType } from "type-graphql";

@InputType()
class NewStudent {
    @Field()
    name: string;
}

export {  NewStudent };