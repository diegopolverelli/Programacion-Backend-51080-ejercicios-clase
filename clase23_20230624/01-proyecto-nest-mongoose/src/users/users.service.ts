import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersDocument } from './Schema/user.schema';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {

  constructor(@InjectModel('Users') private usersModel: Model<UsersDocument>, private config: ConfigService){

  }

  create(createUserDto: CreateUserDto) {

    return this.usersModel.create(createUserDto)

    // return 'This action adds a new user';

  }

  findAll() {
    console.log(this.config.get<string>('EMAIL'))
    return this.usersModel.find()
    // return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
