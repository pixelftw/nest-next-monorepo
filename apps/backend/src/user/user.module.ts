import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { DatabaseService } from 'src/database/database.service';

@Module({
  providers: [UserResolver, UserService, DatabaseService],
  exports: [UserService],
})
export class UserModule {}
