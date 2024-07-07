import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('cart')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }

  @Get()
  findAll() {
    return this.cartService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartService.findOne(id);
  }

  @Get('user/:accountId')
  async getProductsByAccountId(@Param('accountId') accountId: string): Promise<any> {
    return this.cartService.findByUserId(accountId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartService.remove(id);
  }

  @Delete(':accountId/:productId')
  async deleteCartByAccountIdAndProductId(@Param('accountId') accountId: string, @Param('productId') productId: string) {
    return this.cartService.deleteCartByAccountIdAndProductId(accountId, productId);
  }
}