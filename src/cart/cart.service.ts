import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCartDto } from './dto/create-cart.dto';
import { Cart, CartDocument } from '../entity/carts';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart.name) private cartModel: Model<CartDocument>) {}

  async create(createCartDto: CreateCartDto): Promise<Cart> {
    const createdCart = new this.cartModel(createCartDto);
    return createdCart.save();
  }

  async findAll(): Promise<Cart[]> {
    return this.cartModel.find().populate('accountId').populate('productId').exec();
  }

  async findOne(id: string): Promise<Cart> {
    return this.cartModel.findById(id).populate('accountId').populate('productId').exec();
  }

  async remove(id: string): Promise<Cart> {
    return this.cartModel.findByIdAndDelete(id);
  }
}