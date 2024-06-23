// src/shipment-details/shipment-details.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateShipmentDetailDto } from 'src/dto/create-shipment-detail';
import { ShipmentDetail, ShipmentDetailDocument } from 'src/entity/shipment-details';

@Injectable()
export class ShipmentDetailService {
  constructor(@InjectModel(ShipmentDetail.name) private shipmentDetailModel: Model<ShipmentDetailDocument>) {}

  async findAll(): Promise<ShipmentDetail[]> {
    return this.shipmentDetailModel.find().exec();
  }

  async findOne(id: string): Promise<ShipmentDetail> {
    return this.shipmentDetailModel.findById(id).exec();
  }

  async create(createShipmentDetailDto: CreateShipmentDetailDto): Promise<ShipmentDetail> {
    const createdShipmentDetail = new this.shipmentDetailModel(createShipmentDetailDto);
    return createdShipmentDetail.save();
  }

  async update(id: string, updateShipmentDetailDto: Partial<ShipmentDetail>): Promise<ShipmentDetail> {
    return this.shipmentDetailModel.findByIdAndUpdate(id, updateShipmentDetailDto, { new: true }).exec();
  }

  async remove(id: string): Promise<ShipmentDetail> {
    return this.shipmentDetailModel.findByIdAndDelete(id).exec();
  }
}