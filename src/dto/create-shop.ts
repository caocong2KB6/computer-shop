import { IsNotEmpty, IsString } from 'class-validator';

export class CreateShopDto {
  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  status: string;
}