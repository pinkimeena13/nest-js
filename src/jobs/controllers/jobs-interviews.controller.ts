import { Controller, Get } from '@nestjs/common';

@Controller('/job-interview')
export class JobInterviewController {
  @Get()
  requestHandler() {
    return 'Job Interview Request Handler';
  }
}
