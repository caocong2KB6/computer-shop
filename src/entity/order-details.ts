// src/order-details/schemas/order-details.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

export type OrderDetailsDocument = HydratedDocument<OrderDetail>;

@Schema()
export class OrderDetail {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Order', required: true })
  orderId: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Product', required: true })
  productId: string;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  status: string;
}

export const OrderDetailSchema = SchemaFactory.createForClass(OrderDetail);