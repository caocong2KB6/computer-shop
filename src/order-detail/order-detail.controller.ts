import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { OrderDetailService } from './order-detail.service';  
import { CreateOrderDetailDto } from './dto/create-order-detail.dto'; 
import { ApiTags } from '@nestjs/swagger';

@ApiTags('order-details')
@Controller('order-details')
export class OrderDetailController {
  constructor(private readonly orderDetailService: OrderDetailService) {}

  @Get()
  async findAll() {
    return this.orderDetailService.findAll();
  }

  @Get(':orderId')
  async findByOrderId(@Param('orderId') orderId: string) {
    return this.orderDetailService.findByOrderId(orderId);
  }

  @Get('user/:orderId')
  async getProductsByAccountId(@Param('orderId') orderId: string): Promise<any> {
    return this.orderDetailService.findByOrderId(orderId);
  }

  @Post()
  async create(@Body() createOrderDetailDto: CreateOrderDetailDto) {
    return this.orderDetailService.create(createOrderDetailDto);
  }
}