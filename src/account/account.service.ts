import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAccountDto } from 'src/dto/create-account';
import { Account, AccountDocument } from 'src/entity/accounts';

@Injectable()
export class AccountService {
  constructor(@InjectModel(Account.name) private accountModel: Model<AccountDocument>) {}

  async findAll(): Promise<Account[]> {
    return this.accountModel.find().exec();
  }

  async findOne(id: string): Promise<Account> {
    return this.accountModel.findById(id).exec();
  }

  async create(createAccountDto: CreateAccountDto): Promise<Account> {
    const createdAccount = new this.accountModel(createAccountDto);
    return createdAccount.save();
  }

  async update(id: string, updateAccountDto: Partial<Account>): Promise<Account> {
    return this.accountModel.findByIdAndUpdate(id, updateAccountDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Account> {
    return this.accountModel.findByIdAndDelete(id).exec();
  }
}
