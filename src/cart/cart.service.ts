import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCartDto } from './dto/create-cart.dto';
import { Cart, CartDocument } from '../entity/carts';
import { ProductDto } from 'products/dto/product.dto';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart.name) private cartModel: Model<CartDocument>) {}

  async create(createCartDto: CreateCartDto): Promise<Cart> {
    createCartDto.status = "Active";
    const createdCart = new this.cartModel(createCartDto);
    return createdCart.save();
  }

  async findAll(): Promise<Cart[]> {
    return this.cartModel.find().populate('accountId').populate('productId').exec();
  }

  async findOne(id: string): Promise<Cart> {
    return this.cartModel.findById(id).populate('accountId').populate('productId').exec();
  }

  async findByUserId(userId: string): Promise<any> {
    const cartItems = await this.cartModel.find({ accountId: userId })
      .populate('productId')
      .exec();
      
     // Extract and return only the product information
    return cartItems.map(cartItem => {
      const product = cartItem.productId as unknown as ProductDto;

      return {
        productId: product._id,
        name: product.name,
        description: product.description,
        price: product.price,
        color: product.color,
        imageUrl: product.imageUrl,
      };
    });
  }

  async remove(id: string): Promise<Cart> {
    return this.cartModel.findByIdAndDelete(id);
  }
}