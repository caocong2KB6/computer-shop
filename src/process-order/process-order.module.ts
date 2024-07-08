import { Module } from '@nestjs/common';
import { ProcessOrderController } from './process-order.controller';
import { ProcessOrderService } from './process-order.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from '../entity/orders';
import { OrderDetail, OrderDetailSchema } from '../entity/order-details';
import { Payment, PaymentSchema } from '../entity/payment';
import { PaymentModule } from '../payment/payment.module';
import { OrderModule } from '../order/order.module';
import { OrderDetailModule } from '../order-detail/order-detail.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    MongooseModule.forFeature([{ name: OrderDetail.name, schema: OrderDetailSchema }]),
    MongooseModule.forFeature([{ name: Payment.name, schema: PaymentSchema }]),
    PaymentModule,
    OrderModule,
    OrderDetailModule
  ],
  controllers: [ProcessOrderController],
  providers: [ProcessOrderService]
})
export class ProcessOrderModule {}
