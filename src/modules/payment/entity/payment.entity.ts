import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Shop } from '../../shop/entity/shop.entity';

export enum PaymentStatus {
  ACCEPTED = 'ACCEPTED',
  PROCESSED = 'PROCESSED',
  DONE = 'DONE',
  PAID = 'PAID',
}

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'uuid', name: 'public_id', unique: true })
  @Generated('uuid')
  publicId: string;

  @ManyToOne(() => Shop, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'shop_id' })
  shop: Shop;

  @Column({ type: 'text' })
  status: PaymentStatus;

  @Column({ type: 'integer', unsigned: true })
  amount: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
