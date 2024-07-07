import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { Cart, CartSchema } from '../entity/carts';
import { Account, AccountSchema } from '../entity/accounts';
import { Product, ProductSchema } from '../entity/products';

@Module({
  imports: [
    MongooseModule.forFeature([
    { name: Cart.name, schema: CartSchema },
    { name: Account.name, schema: AccountSchema },
    { name: Product.name, schema: ProductSchema },
    ]),
  ],
  providers: [CartService],
  controllers: [CartController],
})
export class CartModule {}