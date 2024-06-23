import { IsNotEmpty, IsString, IsNumber, IsMongoId, IsDate } from 'class-validator';

export class CreatePaymentDto {
  @IsNotEmpty()
  @IsMongoId()
  accountId: string;

  @IsNotEmpty()
  @IsMongoId()
  orderId: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsDate()
  dateTime: Date;

  @IsNotEmpty()
  @IsString()
  status: string;
}