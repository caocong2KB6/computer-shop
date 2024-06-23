// src/mongoose.config.ts
import { MongooseModuleOptions } from '@nestjs/mongoose';

export const mongooseConfig: MongooseModuleOptions = {
  uri: 'mongodb+srv://sa:123@computertechshop.ekohmgq.mongodb.net/?retryWrites=true&w=majority&appName=ComputerTechShopDB',
};