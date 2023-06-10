import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  users:Array<User>

  constructor(){
    this.users=[];
  }

  create(createUserDto: CreateUserDto) {

    if(!createUserDto.first_name || !createUserDto.email) throw new HttpException(`Faltan datos`,HttpStatus.BAD_REQUEST)

    let id=1;
    if(this.users.length>0) id=this.users[this.users.length-1].id +1;

    let user={
      id,
      first_name:createUserDto.first_name,
      email:createUserDto.email
    }

    this.users.push(user)

    return user 
    // return 'This action adds a new user';
  }

  findAll() {
    return this.users;

    // return `This action returns all users`;
  }

  findOne(id: number) {

    let user=this.users.find(u=>u.id==id)
    if(!user) throw new HttpException(`No existe el usuario con id ${id}`,HttpStatus.NOT_FOUND)

    return user

    // return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {

    let indexUser=this.users.findIndex(u=>u.id==id)
    if(indexUser==-1) throw new HttpException(`No existe el usuario con id ${id}`,HttpStatus.NOT_FOUND)

    this.users.splice(indexUser,1)

    return `Se elimino el usuario con id #${id}`;
  }
}
