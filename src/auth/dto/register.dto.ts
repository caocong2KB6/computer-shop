import { IsEmail, IsNotEmpty } from "class-validator";

export class RegisterDto {
    @IsEmail()
    email: string;
  
    @IsNotEmpty()
    userName: string;
  
    @IsNotEmpty()
    password: string;
  
    @IsNotEmpty()
    role: string; // You may adjust this based on your role management
  }