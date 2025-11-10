import { Injectable } from '@nestjs/common';
import { PaymentEntityService } from '../../payment/services/payment-entity.service';
import { Shop } from '../../shop/entity/shop.entity';
import { Payment } from '../../payment/entity/payment.entity';

@Injectable()
export class PaymentService {
  constructor(private readonly paymentEntityService: PaymentEntityService) {}

  async create(shop: Shop, amount: number): Promise<Payment> {
    //validate amount of payment

    return await this.paymentEntityService.createPayment(shop, amount);
  }
}
