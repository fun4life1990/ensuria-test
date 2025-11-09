import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { SettingVariable } from '../entity/setting.entity';
import { IsEnum, IsNumber, Min } from 'class-validator';

export class SettingDto {
  @ApiProperty({ type: Number, example: 1 })
  @Expose()
  id: number;

  @ApiProperty({ enum: SettingVariable })
  @IsEnum(SettingVariable)
  variable: SettingVariable;

  @ApiProperty({ type: Number, example: 12 })
  @IsNumber()
  @Min(0)
  value: number;
}
