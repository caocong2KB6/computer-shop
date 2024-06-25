import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAccountDto } from './dto/create-account.dto';
import { Account, AccountDocument } from 'src/entity/accounts';

@Injectable()
export class AccountService {
  constructor(@InjectModel(Account.name) private accountModel: Model<AccountDocument>) {}

  async findOneByUsername(username: string): Promise<Account | undefined> {
    return this.accountModel.findOne({ userName: username }).exec();
  }

  async findOneByEmail(email: string): Promise<Account | undefined> {
    return this.accountModel.findOne({ email }).exec();
  }

  async findOneByResetPasswordToken(token: string): Promise<Account | undefined> {
    return this.accountModel.findOne({ resetPasswordToken: token }).exec();
  }

  async create(account: CreateAccountDto): Promise<Account> {
    const createdAccount = new this.accountModel(account);
    return createdAccount.save();
  }

  async findAll(): Promise<Account[]> {
    return this.accountModel.find().exec();
  }

  async findOneById(id: string): Promise<Account> {
    return this.accountModel.findById(id).exec();
  }

  async update(id: string, updateAccountDto: Partial<Account>): Promise<Account> {
    return this.accountModel.findByIdAndUpdate(id, updateAccountDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Account> {
    return this.accountModel.findByIdAndDelete(id).exec();
  }
}
