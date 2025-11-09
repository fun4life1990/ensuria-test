import { Injectable } from '@nestjs/common';
import { SettingService } from '../../setting/services/setting.service';
import { UpdateSettingsDto } from '../dto/requests/update-settings.dto';

@Injectable()
export class SystemSettingsService {
  constructor(private readonly settingService: SettingService) {}

  updateSettings(dto: UpdateSettingsDto) {
    return dto;
  }
}
