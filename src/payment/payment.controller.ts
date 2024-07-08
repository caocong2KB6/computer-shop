// src/payments/payments.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { Payment } from '../entity/payment';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@ApiTags('payments')
@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentsService: PaymentService) {}

  @Get()
  async findAll(): Promise<Payment[]> {
    return this.paymentsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Payment> {
    return this.paymentsService.findOne(id);
  }


  @Post()
  async create(@Body() createPaymentDto: CreatePaymentDto): Promise<Payment> {
    return this.paymentsService.create(createPaymentDto);
  }

  // @Post()
  // @Redirect()
  // async create(
  //   @Query('accountId') accountId: string,
  //   @Query('orderId') orderId: string,
  //   @Query('amount') amount: number,
  //   @Query('redirectUri') redirectUri: string,
  // ) {
  //   const createPaymentDto: CreatePaymentDto = {
  //     accountId,
  //     orderId,
  //     amount,
  //     dateTime : new Date(Date.now()),
  //     status : "Active",
  //     redirectUri,
  //   };
    
  //   this.paymentsService.create(createPaymentDto)
    
  //   return redirectUri;
  // }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePaymentDto: Partial<Payment>): Promise<Payment> {
    return this.paymentsService.update(id, updatePaymentDto);
  }

  @Put('success/:paymentId')
  async paymentSuccess(
    @Param('paymentId') paymentId: string, 
    @Query('returnUrl') returnUrl: string) {
      this.paymentsService.updateStatus(paymentId);
      return { returnUrl, statusCode: 302 };
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Payment> {
    return this.paymentsService.remove(id);
  }
}