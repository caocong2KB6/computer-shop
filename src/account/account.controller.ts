// src/accounts/accounts.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AccountService } from './account.service';
import { Account } from 'src/entity/accounts';
import { CreateAccountDto } from 'src/dto/create-account';


@Controller('accounts')
export class AccountController {
  constructor(private readonly accountsService: AccountService) {}

  @Get()
  async findAll(): Promise<Account[]> {
    return this.accountsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Account> {
    return this.accountsService.findOne(id);
  }

  @Post()
  async create(@Body() createAccountDto: CreateAccountDto): Promise<Account> {
    return this.accountsService.create(createAccountDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateAccountDto: Partial<Account>): Promise<Account> {
    return this.accountsService.update(id, updateAccountDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Account> {
    return this.accountsService.remove(id);
  }
}