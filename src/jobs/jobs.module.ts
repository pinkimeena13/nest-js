import { Module } from '@nestjs/common';
import { JobInterviewController } from './controllers/jobs-interviews.controller';
import { JobsApplicationsController } from './controllers/jobs-applications.controller';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [JobInterviewController, JobsApplicationsController],
})
export class JobModule {}
