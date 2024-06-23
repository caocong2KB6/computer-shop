// src/shops/shops.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShopController } from './shop.controller';
import { ShopService } from './shop.service';
import { Shop, ShopSchema } from 'src/entity/shops';

@Module({
  imports: [MongooseModule.forFeature([{ name: Shop.name, schema: ShopSchema }])],
  controllers: [ShopController],
  providers: [ShopService],
})
export class ShopModule {}