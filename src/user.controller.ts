import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDTO } from './dto';
import { UsersService } from './users.service';
// import { UserStore } from './user.store';

@Controller('/user')
export class UserController {
  constructor(private userService: UsersService) {}
  @Post()
  createUser(@Body() createUserDto: CreateUserDTO) {
    return this.userService.addUser(createUserDto);
    return { message: 'USER ADDED' };
  }
  @Get()
  findAllUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  findUser(@Param('id') id: number) {
    return this.userService.getUser(+id);
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() updateUserDto: CreateUserDTO) {
    return { message: 'USER UPDATED' };
    this.userService.updateUser(+id, updateUserDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    this.userService.deleteUser(+id);
    return { message: 'USER DELETED' };
  }
}
