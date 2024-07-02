import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStoreAvailableDto } from './dto/create-store-available.dto';
import { StoreAvailable, StoreAvailableDocument } from '../entity/store-available';

@Injectable()
export class StoreAvailableService {
  constructor(@InjectModel(StoreAvailable.name) private storeAvailableModel: Model<StoreAvailableDocument>) {}

  async findAll(): Promise<StoreAvailable[]> {
    return this.storeAvailableModel.find().exec();
  }

  async findOne(id: string): Promise<StoreAvailable> {
    return this.storeAvailableModel.findById(id).exec();
  }

  async create(createStoreAvailableDto: CreateStoreAvailableDto): Promise<StoreAvailable> {
    const createdStoreAvailable = new this.storeAvailableModel(createStoreAvailableDto);
    return createdStoreAvailable.save();
  }

  async update(id: string, updateStoreAvailableDto: Partial<StoreAvailable>): Promise<StoreAvailable> {
    return this.storeAvailableModel.findByIdAndUpdate(id, updateStoreAvailableDto, { new: true }).exec();
  }

  async remove(id: string): Promise<StoreAvailable> {
    return this.storeAvailableModel.findByIdAndDelete(id).exec();
  }
}
