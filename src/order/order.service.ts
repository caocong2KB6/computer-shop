import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from 'src/entity/orders';
import { CreateOrderDto } from './dto/create-order';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}

  async findAll(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  async findOne(id: string): Promise<Order> {
    return this.orderModel.findById(id).exec();
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
