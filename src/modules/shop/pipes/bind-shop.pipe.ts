import { Injectable, NotFoundException, PipeTransform } from '@nestjs/common';
import { ShopEntityService } from '../services/shop-entity.service';
import { Shop } from '../entity/shop.entity';

@Injectable()
export class BindShopPipe implements PipeTransform {
  constructor(private shopEntityService: ShopEntityService) {}

  async transform(value: string): Promise<Shop> {
    try {
      const client = await this.shopEntityService.findByPublicId(value);

      if (!client) {
        throw new Error();
      }

      return client;
    } catch {
      //TODO add logging for unexpected errors
      throw new NotFoundException('Shop not found');
    }
  }
}
