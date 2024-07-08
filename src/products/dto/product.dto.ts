import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsMongoId, IsNumber } from 'class-validator';

export class ProductDto {
  @ApiProperty({ example: 'id' })
  @IsNotEmpty()
  @IsMongoId()
  _id: string;

  @ApiProperty({ example: '667d0c604a01a4699fd51727' })
  @IsNotEmpty()
  @IsMongoId()
  categoryId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  price: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  color: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  status: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  imageUrl: string;
}