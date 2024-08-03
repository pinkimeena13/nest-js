import { Module } from '@nestjs/common';
import { UserController } from './controllers/users.controllers';
import { AccountsController } from './controllers/accounts.controllers';
import { UsersService } from './services/users.service';

export
@Module({
  imports: [],
  controllers: [UserController, AccountsController],
  providers: [UsersService],
  exports: [UsersService],
})
class UsersModule {}
