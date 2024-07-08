import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderDetail, OrderDetailsDocument } from '../entity/order-details'; 
import { CreateOrderDetailDto } from './dto/create-order-detail.dto'; 
import { ProductDto } from 'products/dto/product.dto';

@Injectable()
export class OrderDetailService {
  constructor(@InjectModel(OrderDetail.name) private orderDetailModel: Model<OrderDetailsDocument>) {}

  async create(createOrderDetailsDto: CreateOrderDetailDto): Promise<OrderDetail> {
    const createdOrderDetails = new this.orderDetailModel(createOrderDetailsDto);
    return createdOrderDetails.save();
  }

  async createMany(createOrderDetailsDto: CreateOrderDetailDto[]): Promise<OrderDetail[]> {
    return this.orderDetailModel.insertMany(createOrderDetailsDto);
  }

  async findByOrderId(orderId: string): Promise<OrderDetail[]> {
    return this.orderDetailModel.find({ orderId: orderId }).populate('productId').exec();
  }

  async findAll(): Promise<OrderDetail[]> {
    return this.orderDetailModel.find().exec();
  }

  async findByUserId(orderId: string): Promise<any> {
    const cartItems = await this.orderDetailModel.find({ orderId: orderId })
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
}