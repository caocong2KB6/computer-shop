import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsMongoId } from 'class-validator';

export class CreateStoreAvailableDto {
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
}