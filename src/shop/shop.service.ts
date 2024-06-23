import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateShopDto } from 'src/dto/create-shop';
import { Shop, ShopDocument } from 'src/entity/Shops';

@Injectable()
export class ShopService {
  constructor(@InjectModel(Shop.name) private shopModel: Model<ShopDocument>) {}

  async findAll(): Promise<Shop[]> {
    return this.shopModel.find().exec();
  }

  async findOne(id: string): Promise<Shop> {
    return this.shopModel.findById(id).exec();
  }

  async create(createShopDto: CreateShopDto): Promise<Shop> {
    const createdShop = new this.shopModel(createShopDto);
    return createdShop.save();
  }

  async update(id: string, updateShopDto: Partial<Shop>): Promise<Shop> {
    return this.shopModel.findByIdAndUpdate(id, updateShopDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Shop> {
    return this.shopModel.findByIdAndDelete(id).exec();
  }
}
