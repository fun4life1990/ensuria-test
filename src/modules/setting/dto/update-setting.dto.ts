import { PickType } from '@nestjs/swagger';
import { SettingDto } from './setting.dto';

export class UpdateSettingDto extends PickType(SettingDto, [
  'variable',
  'value',
]) {}
