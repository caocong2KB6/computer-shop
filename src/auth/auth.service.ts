import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AccountService } from '../account/account.service';
import { CreateAccountDto } from '../account/dto/create-account.dto'; 

@Injectable()
export class AuthService {
  constructor(
    private accountService: AccountService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.accountService.findOneByEmail(email);
    if (user && bcrypt.compareSync(password, user.password)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async validateUserById(id: string): Promise<any> {
    return this.accountService.findOneById(id);
  }

  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = {
      username: user._doc.userName,
      sub: user._doc._id.toString() // Convert ObjectId to string if necessary
    };

    const accessToken = this.jwtService.sign(payload);

    return {
      access_token: accessToken
    };
  }

  async register(account: CreateAccountDto) {
    const hashedPassword = bcrypt.hashSync(account.password, 10);
    account.password = hashedPassword;
    const createdAccount = await this.accountService.create(account);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = createdAccount;
    return result;
  }

  async logout() {
    // Implement logout logic if using sessions or tokens that need invalidation
    // For JWT, since it's stateless, logout can simply mean discarding the token on the client side
    // No server-side invalidation is required
  }
}