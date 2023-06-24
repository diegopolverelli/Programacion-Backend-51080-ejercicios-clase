import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './Schema/user.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:[
    MongooseModule.forFeature(
      [
        {
          name: 'Users',
          schema: UserSchema
        }
      ]
    ),
    ConfigModule
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
