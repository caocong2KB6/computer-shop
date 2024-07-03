import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsMongoId, IsNumber } from 'class-validator';

export class UpdateProductDto {
  @ApiProperty({ example: '667d0c604a01a4699fd51727' })
  @IsMongoId()
  categoryId: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNumber()
  price: string;

  @ApiProperty()
  @IsString()
  color: string;

  @ApiProperty()
  @IsString()
  status: string;

  @ApiProperty()
  @IsString()
  imageUrl: string;
}