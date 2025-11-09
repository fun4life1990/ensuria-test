import { UpdateSettingDto } from '../../../setting/dto/update-setting.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {IsArray, ValidateNested} from "class-validator";

export class UpdateSettingsDto {
  @ApiProperty({ type: UpdateSettingDto, isArray: true })
  @IsArray()
  @ValidateNested()
  @Type(() => UpdateSettingDto)
  settings: UpdateSettingDto[];
}
