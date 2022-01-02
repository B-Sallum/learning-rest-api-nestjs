import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';
import { ListUserDto } from './dto/list-user.dto';

@Injectable()
export class UserService {
  constructor(private database: PrismaService) {}

  async createUser(createData: CreateUserDto): Promise<User> {
    if (createData.pass !== createData.passConfirm) {
      throw new UnauthorizedException(`Passwords don't match`);
    }
    const userExists = await this.database.user.findUnique({
      where: { email: createData.email },
    });

    if (userExists) {
      throw new ConflictException('This e-mail is already in use.');
    }

    const salt = 10;
    const passHash = await bcrypt.hash(createData.pass, salt);

    delete createData.passConfirm;

    const user = await this.database.user.create({
      data: {
        ...createData,
        pass: passHash,
      },
    });

    delete user.pass;
    return user;
  }

  async update(id: string, updateData: UpdateUserDto): Promise<User> {
    const user = await this.database.user.update({
      where: { id: id },
      data: updateData,
    });
    delete user.pass;
    return user;
  }

  async getAll(): Promise<ListUserDto[]> {
    const users = await this.database.user.findMany();
    const allUsers = users.map(({ pass, ...rest }) => rest);
    return allUsers;
  }
}
