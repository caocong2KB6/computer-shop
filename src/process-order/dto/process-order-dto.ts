import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsArray, ValidateNested } from 'class-validator';
import { ProductArray } from './product-array';

export class ProcessOrderDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  accountId: string;

  @ApiProperty({ type: [ProductArray] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductArray)
    products: { 
    productId:string; 
    quantity: number; 
    price: number }[];
}

