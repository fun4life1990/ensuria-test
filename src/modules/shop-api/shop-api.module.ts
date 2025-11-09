import { Module } from '@nestjs/common';
import { ShopApiController } from './controllers/shop-api.controller';
import { ShopApiService } from './services/shop-api.service';
import { ShopModule } from '../shop/shop.module';

@Module({
  imports: [ShopModule],
  controllers: [ShopApiController],
  providers: [ShopApiService],
})
export class ShopApiModule {}
