// src/storeAvailables/storeAvailables.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreAvailableController } from './store-available.controller';
import { StoreAvailableService } from './store-available.service';
import { StoreAvailable, StoreAvailableSchema } from '../entity/store-available';

@Module({
  imports: [MongooseModule.forFeature([{ name: StoreAvailable.name, schema: StoreAvailableSchema }])],
  controllers: [StoreAvailableController],
  providers: [StoreAvailableService],
})
export class StoreAvailableModule {}