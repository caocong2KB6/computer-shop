import { Controller, Post, Body, UseGuards, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateAccountDto } from 'src/account/dto/create-account.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto.email, loginDto.password);
  }

  @Post('register')
  async register(@Body() createAccountDto: CreateAccountDto)
  {
    return this.authService.register(createAccountDto);
  }

  // Example of a protected route
  @Get('profile')
  @UseGuards(JwtAuthGuard) // Protect with JWT Auth Guard
  async getProfile(@Req() req) {
    return req.user;
  }

  // Logout endpoint (optional for JWT since it's stateless)
  // For session-based systems, this would clear the session
  // or invalidate the token stored in the session
  @Post('logout')
  async logout(@Req() req) {
    console.log(req);
    await this.authService.logout();
    return 'Logged out successfully';
  }
}