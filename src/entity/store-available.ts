// src/store-available/schemas/store-available.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

export type StoreAvailableDocument = HydratedDocument<StoreAvailable>;

@Schema()
export class StoreAvailable {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Shop', required: true })
  shopId: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Product', required: true })
  productId: string;

  @Prop({ required: true })
  quantity: number;
}

export const StoreAvailableSchema = SchemaFactory.createForClass(StoreAvailable);