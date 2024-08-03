/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";


@Injectable()
export class ParseDatePipe implements PipeTransform{
    transform(value: string | number , metadata : ArgumentMetadata) {
        const data = this.convertTimestamp(value);

        if(!Date || isNaN(+data)){
            throw new BadRequestException("Invalid date")
        }
        return Date ;
        
    }
private convertTimestamp(timestamp: string | number) {}
}