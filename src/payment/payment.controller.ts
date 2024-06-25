// src/payments/payments.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { Payment } from 'src/entity/payment';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { ApiTags } from '@nestjs/swagger';

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

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePaymentDto: Partial<Payment>): Promise<Payment> {
    return this.paymentsService.update(id, updatePaymentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Payment> {
    return this.paymentsService.remove(id);
  }
}