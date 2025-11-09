import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
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

  @Column({ type: 'text' })
  @Index({ unique: true })
  variable: SettingVariable;

  //TODO add possibility also to store string values
  @Column({ type: 'integer', unsigned: true })
  value: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
