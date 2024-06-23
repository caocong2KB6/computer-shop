// src/payments/schemas/payment.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

export type PaymentDocument = HydratedDocument<Payment>;

@Schema()
export class Payment {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Account', required: true })
  accountId: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Order', required: true })
  orderId: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  dateTime: Date;

  @Prop({ required: true })
  status: string;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);