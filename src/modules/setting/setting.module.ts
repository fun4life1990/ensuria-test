import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Setting } from './entity/setting.entity';
import { SettingEntityService } from './services/setting-entity.service';

@Module({
  imports: [TypeOrmModule.forFeature([Setting])],
  providers: [SettingEntityService],
  exports: [SettingEntityService],
})
export class SettingModule {}
