import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsBooleanString } from 'class-validator';

export class CreateShipmentDetailDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  accountId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  receiver: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBooleanString()
  default: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  status: string;
}