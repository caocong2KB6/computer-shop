import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CartDocument = HydratedDocument<Cart>;

@Schema()
export class Cart {
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Account', required: true })
    accountId: string;
  
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Product', required: true })
    productId: string;
  
    @Prop({ required: true })
    status: string;
}

export const CartSchema = SchemaFactory.createForClass(Cart);