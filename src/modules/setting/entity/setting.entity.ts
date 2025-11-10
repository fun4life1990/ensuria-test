import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum SettingVariable {
  SYSTEM_FIXED_COMMISSION_A = 'SYSTEM_FIXED_COMMISSION_A',
  SYSTEM_PERCENTAGE_COMMISSION_B = 'SYSTEM_PERCENTAGE_COMMISSION_B',
  BLOCKING_SUM_PERCENTAGE_D = 'BLOCKING_SUM_PERCENTAGE_D',
}

@Entity()
export class Setting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', unique: true })
  variable: SettingVariable;

  //TODO add possibility also to store string values
  @Column({ type: 'integer', unsigned: true })
  value: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
