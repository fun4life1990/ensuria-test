import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Setting } from './entity/setting.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Setting])],
})
export class SettingModule {}
