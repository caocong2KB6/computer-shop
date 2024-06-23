import { IsNotEmpty, IsString, IsNumber, IsMongoId } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsMongoId()
  accountId: string;

  @IsNotEmpty()
  @IsMongoId()
  shopId: string;

  @IsNotEmpty()
  @IsMongoId()
  productId: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  status: string;

  @IsMongoId()
  shipmentDetailId?: string; // optional, as it's not marked as required in the schema
}