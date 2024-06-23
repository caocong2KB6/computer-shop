import { IsNotEmpty, IsString, IsMongoId } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsMongoId()
  categoryId: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  color: string;

  @IsNotEmpty()
  @IsString()
  status: string;
}