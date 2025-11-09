import { PickType } from '@nestjs/swagger';
import { ShopDto } from './shop.dto';

export class CreateShopDto extends PickType(ShopDto, [
  'name',
  'commissionValue',
]) {}
