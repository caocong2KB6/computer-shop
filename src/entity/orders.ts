// src/orders/schemas/order.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Account', required: true })
  accountId: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Shop', required: true })
  shopId: string;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  totalAmount: number;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  dateTime: Date;

  @Prop({ required: true })
  status: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'ShipmentDetail' })
  shipmentDetailId: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);