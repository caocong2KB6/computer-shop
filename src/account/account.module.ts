// src/accounts/accounts.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { Account, AccountSchema } from '../entity/accounts';

@Module({
  imports: [MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }])],
  controllers: [AccountController],
  providers: [AccountService],
  exports: [AccountService], // Ensure AccountService is exported if needed
})
export class AccountModule {}