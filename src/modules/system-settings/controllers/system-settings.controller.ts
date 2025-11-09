import { Body, Controller, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UpdateSettingsDto } from '../dto/requests/update-settings.dto';
import { SystemSettingsService } from '../services/system-settings.service';

@ApiTags('System Settings')
@Controller({ path: 'system-settings', version: '1' })
export class SystemSettingsController {
  constructor(private readonly systemSettingsService: SystemSettingsService) {}

  @Put()
  updateSettings(@Body() dto: UpdateSettingsDto) {
    return this.systemSettingsService.updateSettings(dto);
  }
}
