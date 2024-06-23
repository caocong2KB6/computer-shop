// src/app.module.ts
import { Module, OnModuleInit } from '@nestjs/common';
import { InjectConnection, MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './products/products.module';
import { mongooseConfig } from './mongoose.config';
import { CategoryModule } from './category/category.module';
import { AccountModule } from './account/account.module';
import { OrderModule } from './order/order.module';
import { ShopModule } from './shop/shop.module';
import { StoreAvailableModule } from './store-available/store-available.module';
import { ShipmentDetailModule } from './shipment-detail/shipment-detail.module';
import { PaymentModule } from './payment/payment.module';
import { Connection } from 'mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(mongooseConfig.uri),
    ProductModule,
    CategoryModule,
    AccountModule,
    OrderModule,
    ShopModule,
    StoreAvailableModule,
    ShipmentDetailModule,
    PaymentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements OnModuleInit {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  onModuleInit() {
    console.log('Connected to database:', this.connection.name);
  }
}