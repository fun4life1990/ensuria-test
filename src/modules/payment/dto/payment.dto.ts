import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { ShopDto } from '../../shop/dto/shop.dto';
import { PaymentStatus } from '../entity/payment.entity';
import { IsEnum, IsNumber, Min } from 'class-validator';

export class PaymentDto {
  @ApiProperty({
    type: String,
    example: '48e81355-82ab-4912-8c53-699c243ca505',
  })
  @Expose({ name: 'publicId' })
  id: number;

  @ApiProperty({ type: ShopDto })
  @Expose()
  @Type(() => ShopDto)
  shop: ShopDto;

  @ApiProperty({ enum: PaymentStatus })
  @Expose()
  @IsEnum(PaymentStatus)
  status: PaymentStatus;

  @ApiProperty({ type: Number, example: 199.99 })
  @Expose()
  @IsNumber()
  @Min(0)
  amount: number;
}
