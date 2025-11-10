import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { Setting, SettingVariable } from '../entity/setting.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseLogicException } from '../../../utils/error/exceptions/base-logic.exception';

@Injectable()
export class SettingEntityService {
  constructor(
    @InjectRepository(Setting)
    private readonly settingRepository: Repository<Setting>,
  ) {}

  async findByVariable(
    variable: SettingVariable,
    em?: EntityManager,
  ): Promise<Setting | null> {
    return this.resolveRepository(em).findOneBy({ variable });
  }

  async updateSetting(
    variable: SettingVariable,
    value: number,
    em?: EntityManager,
  ) {
    const setting = await this.findByVariable(variable, em);

    if (!setting) {
      throw new BaseLogicException('Setting not found', 404);
    }

    setting.value = value;
    await this.resolveRepository(em).save(setting);
  }

  private resolveRepository(em?: EntityManager): Repository<Setting> {
    return em?.getRepository(Setting) || this.settingRepository;
  }
}
