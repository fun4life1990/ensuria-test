import { Injectable } from '@nestjs/common';
import { CreateShopRequestDto } from '../dto/requests/create-shop-request.dto';
import { ShopEntityService } from '../../shop/services/shop-entity.service';
import { Shop } from '../../shop/entity/shop.entity';

@Injectable()
export class ShopService {
  constructor(private readonly shopService: ShopEntityService) {}

  async create(dto: CreateShopRequestDto): Promise<Shop> {
    dto.commissionValue = Math.floor(dto.commissionValue * 100);

    return await this.shopService.create(dto);
  }
}
