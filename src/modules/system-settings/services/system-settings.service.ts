import { Injectable } from '@nestjs/common';
import { SettingEntityService } from '../../setting/services/setting-entity.service';
import { UpdateSettingsDto } from '../dto/requests/update-settings.dto';
import { SettingVariable } from '../../setting/entity/setting.entity';
import { BaseLogicException } from '../../../utils/error/exceptions/base-logic.exception';
import { DataSource } from 'typeorm';

@Injectable()
export class SystemSettingsService {
  constructor(
    private readonly settingService: SettingEntityService,
    private readonly dataSource: DataSource,
  ) {}

  async updateSettings(dto: UpdateSettingsDto) {
    // Validate duplicates
    const variables = dto.settings.map((s) => s.variable);
    const uniqueVariables = new Set(variables);
    if (uniqueVariables.size !== variables.length) {
      throw new BaseLogicException('Duplicate setting variables provided');
    }

    // Validate completeness: all variables must be present
    const requiredVars = Object.values(SettingVariable);
    const missing = requiredVars.filter(
      (rv) => !uniqueVariables.has(rv as SettingVariable),
    );
    if (missing.length > 0) {
      throw new BaseLogicException(
        `Missing settings for variables: ${missing.join(', ')}`,
      );
    }

    // Also ensure no extra variables beyond enum (should be caught by class-validator, but double-check)
    const extras = variables.filter((v) => !requiredVars.includes(v));
    if (extras.length > 0) {
      const extraVariableNames = Array.from(new Set(extras));

      throw new BaseLogicException(
        `Unknown setting variables provided: ${extraVariableNames.join(', ')}`,
      );
    }

    // Perform transactional update
    await this.dataSource.transaction(async (em) => {
      //Could be rewritten into Promise.all for better performance but worse readability
      for (const setting of dto.settings) {
        await this.settingService.updateSetting(
          setting.variable,
          setting.value,
          em,
        );
      }
    });

    return dto;
  }
}
