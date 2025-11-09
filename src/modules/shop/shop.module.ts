import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shop } from './entity/shop.entity';
import { ShopEntityService } from './services/shop-entity.service';

@Module({
  imports: [TypeOrmModule.forFeature([Shop])],
  providers: [ShopEntityService],
  exports: [ShopEntityService],
})
export class ShopModule {}
