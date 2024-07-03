import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AccountDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string;
  
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    userName: string;
  
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password: string;
  
    @IsString()
    role: string;
  
    @IsString()
    status: string;
  }