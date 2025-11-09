import { PickType } from '@nestjs/swagger';
import { ShopDto } from '../../../shop/dto/shop.dto';
import { Transform } from 'class-transformer';

export class ShopResponseDto extends PickType(ShopDto, [
  'id',
  'name',
  'commissionValue',
]) {
  @Transform(({ value }) => value / 100)
  commissionValue: number;
}
