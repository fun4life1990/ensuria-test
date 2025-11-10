import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateShopRequestDto } from '../dto/requests/create-shop-request.dto';
import { ShopService } from '../services/shop.service';
import { Serialize } from '../../../utils/serialize.interceptor';
import { ShopResponseDto } from '../dto/responses/shop-response.dto';
import { Shop } from '../../shop/entity/shop.entity';

@ApiTags('Shop')
@Controller({ path: 'shop', version: '1' })
export class ShopController {
  constructor(private readonly shopApiService: ShopService) {}

  @Serialize(ShopResponseDto)
  @Post()
  async create(@Body() dto: CreateShopRequestDto): Promise<Shop> {
    return this.shopApiService.create(dto);
  }
}
