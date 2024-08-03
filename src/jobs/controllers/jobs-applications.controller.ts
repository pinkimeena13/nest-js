import { Controller, Get } from '@nestjs/common';

@Controller('/job-applications')
export class JobsApplicationsController {
  @Get()
  requestHandler() {
    return 'Jobs Application Route';
  }
}
