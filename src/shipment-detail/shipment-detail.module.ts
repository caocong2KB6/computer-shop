// src/shipment-details/shipment-details.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShipmentDetailController } from './shipment-detail.controller';
import { ShipmentDetailService } from './shipment-detail.service';
import { ShipmentDetail, ShipmentDetailSchema } from '../entity/shipment-details';


@Module({
  imports: [MongooseModule.forFeature([{ name: ShipmentDetail.name, schema: ShipmentDetailSchema }])],
  controllers: [ShipmentDetailController],
  providers: [ShipmentDetailService],
})
export class ShipmentDetailModule {}