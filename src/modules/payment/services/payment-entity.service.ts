import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { Payment, PaymentStatus } from '../entity/payment.entity';
import { Shop } from '../../shop/entity/shop.entity';

@Injectable()
export class PaymentEntityService {
  constructor(private readonly paymentRepository: Repository<Payment>) {}

  async findByPublicId(publicId: string) {
    return await this.paymentRepository.findOneBy({ publicId });
  }

  async createPayment(shop: Shop, amount: number, em?: EntityManager) {
    const repository = this.resolveRepository(em);

    const payment = repository.create({
      shop: {
        id: shop.id,
      },
      amount,
      status: PaymentStatus.ACCEPTED,
    });

    return await repository.save(payment);
  }

  private resolveRepository(em?: EntityManager): Repository<Payment> {
    return em?.getRepository(Payment) || this.paymentRepository;
  }
}
