import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsMongoId, IsDate } from 'class-validator';
import { Types } from 'mongoose';

export class OrderDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsMongoId()
  accountId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsMongoId()
  shopId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  totalAmount: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  dateTime: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  status: string;

  @ApiProperty()
  @IsMongoId()
  shipmentDetailId?: string; // optional, as it's not marked as required in the schema

  @IsMongoId()
  _id?: Types.ObjectId; // optional, as it's not marked as required in the schema
}