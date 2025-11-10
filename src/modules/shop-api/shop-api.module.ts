import { Module } from '@nestjs/common';
import { ShopController } from './controllers/shop.controller';
import { ShopService } from './services/shop.service';
import { ShopModule } from '../shop/shop.module';
import { PaymentController } from './controllers/payment.controller';
import { PaymentModule } from '../payment/payment.module';
import { PaymentService } from './services/payment.service';

@Module({
  imports: [ShopModule, PaymentModule],
  controllers: [ShopController, PaymentController],
  providers: [ShopService, PaymentService],
})
export class ShopApiModule {}
