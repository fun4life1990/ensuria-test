import {Body, Controller, Put} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {UpdateSettingsDto} from "../dto/requests/update-settings.dto";

@ApiTags('System Settings')
@Controller({ path: 'system-settings', version: '1' })
export class SystemSettingsController {
  @Put()
  async updateSettings(@Body() dto: UpdateSettingsDto) {}
}
