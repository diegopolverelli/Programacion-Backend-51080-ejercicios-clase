import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('/api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto, @Query() query) {
    console.log(query)
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(@Query() query) {
    let users=this.usersService.findAll();
    let {limit}=query;
    if(limit && limit>0){
      users=users.slice(0,limit)
    }
    return {status:"success", users}
  }

  @Get('todos')
  todos(@Request() req) {
    console.log(req.body)
    console.log(req.params)
    console.log(req.query)

    return {status:"success" }
  }


  @Get('prueba')
  prueba(@Query() query) {
    console.log(query)
    return {status:"success", ok:'TODO OK...!!!', query}
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
