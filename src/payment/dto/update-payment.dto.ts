import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdatePaymentDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  status: string;
  
}