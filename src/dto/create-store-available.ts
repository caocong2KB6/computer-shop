import { IsNotEmpty, IsNumber, IsMongoId } from 'class-validator';

export class CreateStoreAvailableDto {
  @IsNotEmpty()
  @IsMongoId()
  shopId: string;

  @IsNotEmpty()
  @IsMongoId()
  productId: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}