// src/payments/payments.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { Payment, PaymentDocument } from 'src/entity/payment';

@Injectable()
export class PaymentService {
  constructor(@InjectModel(Payment.name) private paymentModel: Model<PaymentDocument>) {}

  async findAll(): Promise<Payment[]> {
    return this.paymentModel.find().exec();
  }

  async findOne(id: string): Promise<Payment> {
    return this.paymentModel.findById(id).exec();
  }

  async create(createPaymentDto: CreatePaymentDto): Promise<Payment> {
    const createdPayment = new this.paymentModel(createPaymentDto);
    return createdPayment.save();
  }

  async update(id: string, updatePaymentDto: Partial<Payment>): Promise<Payment> {
    return this.paymentModel.findByIdAndUpdate(id, updatePaymentDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Payment> {
    return this.paymentModel.findByIdAndDelete(id).exec();
  }
}