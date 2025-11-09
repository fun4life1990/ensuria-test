import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Setting } from './entity/setting.entity';
import { SettingService } from './services/setting.service';

@Module({
  imports: [TypeOrmModule.forFeature([Setting])],
  providers: [SettingService],
  exports: [SettingService],
})
export class SettingModule {}
