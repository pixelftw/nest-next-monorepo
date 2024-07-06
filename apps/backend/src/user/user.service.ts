import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { DatabaseService } from 'src/database/database.service';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly db: DatabaseService) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    return await this.db.user.create({ data: createUserInput });
  }

  async findAll(): Promise<User[]> {
    return await this.db.user.findMany();
  }

  async findOne(id: string): Promise<User> {
    return await this.db.user.findUnique({ where: { id } });
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<User> {
    return this.db.user.update({ where: { id }, data: updateUserInput });
  }

  async remove(id: string): Promise<User> {
    return await this.db.user.delete({ where: { id } });
  }
}
