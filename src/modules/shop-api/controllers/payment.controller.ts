import { ApiParam, ApiTags } from '@nestjs/swagger';
import { Controller, Param, Post } from '@nestjs/common';
import { BindShopPipe } from '../../shop/pipes/bind-shop.pipe';
import { Shop } from '../../shop/entity/shop.entity';

@ApiTags('Shop / Payment')
@Controller({ path: 'shop/:shopId/payment', version: '1' })
export class PaymentController {
  @ApiParam({
    name: 'shopId',
    type: String,
  })
  @Post()
  create(@Param('shopId', BindShopPipe) shop: Shop) {
    return shop;
  }
}
