import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ProductArray {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    productId: string;
  
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    productName: string;
  
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    quantity: number;
  
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    price: number;
  };