// src/shops/shops.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ShopService } from './shop.service';
import { Shop } from '../entity/shops';
import { CreateShopDto } from './dto/create-shop.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('shops')
@Controller('shops')
export class ShopController {
  constructor(private readonly shopsService: ShopService) {}

  @Get()
  async findAll(): Promise<Shop[]> {
    return this.shopsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Shop> {
    return this.shopsService.findOne(id);
  }

  @Post()
  async create(@Body() createShopDto: CreateShopDto): Promise<Shop> {
    return this.shopsService.create(createShopDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateShopDto: Partial<Shop>): Promise<Shop> {
    return this.shopsService.update(id, updateShopDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Shop> {
    return this.shopsService.remove(id);
  }
}