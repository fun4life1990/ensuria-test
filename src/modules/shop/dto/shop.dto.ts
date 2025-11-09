import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNumber, IsString, MaxLength, Min, MinLength } from 'class-validator';

export class ShopDto {
  @ApiProperty({
    type: String,
    example: '48e81355-82ab-4912-8c53-699c243ca505',
  })
  @Expose({ name: 'publicId' })
  id: number;

  @ApiProperty({ type: String, example: 'Sample Shop' })
  @Expose()
  @IsString()
  @MinLength(3)
  @MaxLength(40)
  name: string;

  @ApiProperty({
    type: Number,
    example: 2.73,
    description: 'Commission in percents',
  })
  @Expose()
  @IsNumber()
  @Min(0)
  commissionValue: number;
}
