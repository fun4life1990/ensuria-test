import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateShopRequestDto } from '../dto/requests/create-shop-request.dto';
import { ShopApiService } from '../services/shop-api.service';
import { Serialize } from '../../../utils/serialize.interceptor';
import { ShopResponseDto } from '../dto/responses/shop-response.dto';
import { Shop } from '../../shop/entity/shop.entity';

@ApiTags('Shop')
@Controller({ path: 'shop', version: '1' })
export class ShopApiController {
  constructor(private readonly shopApiService: ShopApiService) {}

  @Serialize(ShopResponseDto)
  @Post()
  async create(@Body() dto: CreateShopRequestDto): Promise<Shop> {
    return this.shopApiService.create(dto);
  }
}
