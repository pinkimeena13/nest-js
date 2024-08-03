/* eslint-disable prettier/prettier */
// import { Controller, Get } from '@nestjs/common';

// @Controller()
// export class JobsController {
//   @Get()
//   getJobs() {
//     return 'Jobs Handler';
//   }
// }

import {
  Controller,
 
  Post,
  Param,
  
  Body,
  ParseIntPipe,
  
} from '@nestjs/common';
import { ParseDatePipe } from '../parase-date.pipe';
@Controller('jobs')
export class JobsController {
  jobsService: any;
  //  constructor(private readonly jobsServices: jobsService){}

  @Post(':id/interview')
  createJob(
    @Param('id', ParseIntPipe) id: number,
    @Body('timestamp' , ParseDatePipe) date: string,
  ) {
    console.log(date);
    return this.jobsService.scheduleJobInterview(id, date) ;
    
  }

  // //   constructor(private readonly JobsService: JobsErvice) {}

  //   @Get(':id')
  //   finJobById(
  //     @Param(
  //       'id',
  //       new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
  //     )
  //     id: number,
  //   ) {
  //     console.log(typeof id);
  //     // return this.JobsService.findJobById(id);
  //   }

  //   @Put('slary/:id')
  //   incSalary(@Param('id') id: number, @Query('increment') inc: number) {}

  //   @Put('active/:id')
  //   toggleJobActiveStatus(
  //     @Param('id') id: number,
  //     @Body('Active') active: boolean,
  //   ) {}

  //   @Put('exp/:id')
  //   setUpdateJobExp(@Param('id') id: number, @Body('exp') exp: number) {}

  //   @Get('ref/:refId')
  //   findJobsByRefId(@Param('refId') id: string) {}

  //   @Put('type/:id')
  //   toggleJobType(@Param('id') id: number, @Body('type') type: number) {}

  //   @Get('search')
  //   findJobsById(@Param('id') id: string) {}
}
