import { PrismaService } from './../prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private database: PrismaService) {}

  async createUser(data: CreateUserDto) {
    const userExists = await this.database.user.findUnique({
      where: { email: data.email },
    });

    if (userExists) {
      
    }
  }
}
