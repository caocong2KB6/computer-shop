// src/shipment-details/shipment-details.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ShipmentDetail } from 'src/entity/shipment-details';
import { ShipmentDetailService } from './shipment-detail.service';
import { CreateShipmentDetailDto } from 'src/dto/create-shipment-detail';

@Controller('shipment-details')
export class ShipmentDetailController {
  constructor(private readonly shipmentDetailsService: ShipmentDetailService) {}

  @Get()
  async findAll(): Promise<ShipmentDetail[]> {
    return this.shipmentDetailsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ShipmentDetail> {
    return this.shipmentDetailsService.findOne(id);
  }

  @Post()
  async create(@Body() createShipmentDetailDto: CreateShipmentDetailDto): Promise<ShipmentDetail> {
    return this.shipmentDetailsService.create(createShipmentDetailDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateShipmentDetailDto: Partial<ShipmentDetail>): Promise<ShipmentDetail> {
    return this.shipmentDetailsService.update(id, updateShipmentDetailDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<ShipmentDetail> {
    return this.shipmentDetailsService.remove(id);
  }
}