import { PrismaService } from './../prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ConflictException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private database: PrismaService) {}

  async createUser(createData: CreateUserDto): Promise<User> {
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
}
