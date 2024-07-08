import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { Order } from '../entity/orders'; 
// import { OrderDetail } from '../entity/order-details'; 
// import { Payment } from '../entity/payment'; 
import { ProcessOrderDTO } from './dto/process-order-dto';
import { OrderService } from '../order/order.service';
import { PaymentService } from '../payment/payment.service';
import { CreateOrderDto } from '../order/dto/create-order.dto';
import { OrderDetailService } from '../order-detail/order-detail.service';
import { CreateOrderDetailDto } from '../order-detail/dto/create-order-detail.dto';
import { CreatePaymentDto } from '../payment/dto/create-payment.dto';

@Injectable()
export class ProcessOrderService {
  constructor(
    private orderService: OrderService,
    private orderDetailService: OrderDetailService,
    private paymentService: PaymentService
  ) {}

  async createOrder(processOrderDto: ProcessOrderDTO): Promise<{ paymentId: string }> {
    const { accountId, products } = processOrderDto;

    // const order = new this.orderModel({
    //   accountId: accountId,
    //   shopId: "668a2eec028d24ad170d8530",
    //   quantity: 0,
    //   totalAmount: 0,
    //   address: "Hà Nội",
    //   status: "Pending",
    //   shipmentDetailId: "668a2f9d028d24ad170d8533"
    // });
    // const createdOrder = await order.save();

    const createOrder = new CreateOrderDto();
    createOrder.accountId = accountId;
    createOrder.shopId = "668a2eec028d24ad170d8530";
    createOrder.quantity = 0;
    createOrder.totalAmount = 0;
    createOrder.address = "Hà Nội";
    createOrder.status = "Pending"
    createOrder.shipmentDetailId = "668a2f9d028d24ad170d8533";

    const orderId = await this.orderService.createReturnOrderId(createOrder);

    const orderDetails: CreateOrderDetailDto[] = products.map(product => ({
      orderId: orderId,
      productId: product.productId,
      quantity: product.quantity,
      price: product.price,
      status: 'Pending',
    }));

    // await this.orderDetailModel.insertMany(orderDetails);

    await this.orderDetailService.createMany(orderDetails);

    const totalAmount = products.reduce((total, product) => total + product.price * product.quantity, 0);
    
    // const payment = new this.paymentModel({
    //   amount: totalAmount,
    //   paymentDate: new Date(),
    //   order: createdOrder._id,
    // });
    // this.paymentService = 
    // await payment.save();

    const createPayment = new CreatePaymentDto();
    
    createPayment.accountId = accountId;
    createPayment.orderId = orderId;
    createPayment.amount = totalAmount;
    createPayment.dateTime = new Date(Date.now());
    createPayment.status = "False";

    const paymentId = await this.paymentService.createReturnPaymentId(createPayment); 

    return { paymentId: paymentId };
  }
}