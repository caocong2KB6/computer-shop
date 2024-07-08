import { Body, Controller, Post } from '@nestjs/common';
import { ProcessOrderService } from './process-order.service';
import { ProcessOrderDTO } from './dto/process-order-dto';

@Controller('process-order')
export class ProcessOrderController {
    constructor(private readonly ordersService: ProcessOrderService) {}

  @Post()
  createOrder(
    @Body() processOrderDto: ProcessOrderDTO) {
    return this.ordersService.createOrder(processOrderDto);; 
  }

}
