import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsMongoId, IsDate } from 'class-validator';

export class CreatePaymentDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsMongoId()
  accountId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsMongoId()
  orderId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  dateTime: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  status: string;
}