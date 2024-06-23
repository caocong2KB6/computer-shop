// src/shipment-details/schemas/shipment-detail.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

export type ShipmentDetailDocument = HydratedDocument<ShipmentDetail>;

@Schema()
export class ShipmentDetail {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Account', required: true })
  accountId: string;

  @Prop({ required: true })
  receiver: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  default: boolean;

  @Prop({ required: true })
  status: string;
}

export const ShipmentDetailSchema = SchemaFactory.createForClass(ShipmentDetail);