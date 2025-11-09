import { Module } from '@nestjs/common';
import { SettingModule } from '../setting/setting.module';
import { SystemSettingsController } from './controllers/system-settings.controller';

@Module({
  imports: [SettingModule],
  controllers: [SystemSettingsController],
})
export class SystemSettingsModule {}
