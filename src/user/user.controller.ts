import { UserService } from './user.service';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';
import { UpdateUserDto } from './dto/update-user.dto';
import { ListUserDto } from './dto/list-user.dto';

@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @Post('create')
  createUser(@Body() data: CreateUserDto): Promise<User> {
    return this.service.createUser(data);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() data: UpdateUserDto): Promise<User> {
    return this.service.update(id, data);
  }

  @Get('all')
  getAll(): Promise<ListUserDto[]> {
    return this.service.getAll();
  }
}
