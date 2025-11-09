import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigFactory } from './config/typeorm';
import { SystemSettingsModule } from './modules/system-settings/system-settings.module';
import { ShopApiModule } from './modules/shop-api/shop-api.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: typeOrmConfigFactory,
    }),
    SystemSettingsModule,
    ShopApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
