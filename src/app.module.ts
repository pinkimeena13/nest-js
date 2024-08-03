import { Module } from '@nestjs/common';
// import { AppController } from './app.controller
// import { AppService } from './app.service';
import { UserController } from './user.controller';
import { UsersService } from './users.service';
// import { UserStore } from './user.store';
// import { UsersModule } from './users/users.module';
import { JobModule } from './jobs/jobs.module';
import { MongooseModule } from '@nestjs/mongoose';
// import { RouterModule } from '@nestjs/core';

// const ROUTES = [{ path: 'jobs', module: JobModule }];
@Module({
  // imports: [RouterModule.register(ROUTES)],
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nest_app_ab')],
  controllers: [UserController, JobModule],
  providers: [UsersService],
})
export class AppModule {}
