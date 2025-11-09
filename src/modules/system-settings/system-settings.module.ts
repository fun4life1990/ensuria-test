import { Module } from '@nestjs/common';
import { SettingModule } from '../setting/setting.module';
import { SystemSettingsController } from './controllers/system-settings.controller';
import { SystemSettingsService } from './services/system-settings.service';

@Module({
  imports: [SettingModule],
  providers: [SystemSettingsService],
  controllers: [SystemSettingsController],
})
export class SystemSettingsModule {}
