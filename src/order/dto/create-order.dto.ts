import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsMongoId } from 'class-validator';

export class CreateOrderDto {
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
  @IsMongoId()
  productId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  status: string;

  @ApiProperty()
  @IsMongoId()
  shipmentDetailId?: string; // optional, as it's not marked as required in the schema
}