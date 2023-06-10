import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


@Schema()
export class User {

    @Prop()
    first_name:string;

    @Prop()
    email:string;
}

export type UsersDocument = HydratedDocument<User>
export const UserSchema = SchemaFactory.createForClass(User)