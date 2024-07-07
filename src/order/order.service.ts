import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from '../entity/orders';
import { CreateOrderDto } from './dto/create-order.dto';
import { ProductDto } from 'products/dto/product.dto';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}

  async findAll(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  async findOne(id: string): Promise<Order> {
    return this.orderModel.findById(id).exec();
  }

  async findByUserId(userId: string): Promise<any> {
    const cartItems = await this.orderModel.find({ accountId: userId })
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

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const createdOrder = new this.orderModel(createOrderDto);
    return createdOrder.save();
  }

  async update(id: string, updateOrderDto: Partial<Order>): Promise<Order> {
    return this.orderModel.findByIdAndUpdate(id, updateOrderDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Order> {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
