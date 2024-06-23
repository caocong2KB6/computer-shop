import { IsNotEmpty, IsString, IsBooleanString } from 'class-validator';

export class CreateShipmentDetailDto {
  @IsNotEmpty()
  @IsString()
  accountId: string;

  @IsNotEmpty()
  @IsString()
  receiver: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsBooleanString()
  default: string;

  @IsNotEmpty()
  @IsString()
  status: string;
}