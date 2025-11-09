import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shop } from '../entity/shop.entity';
import { CreateShopDto } from '../dto/create-shop.dto';

@Injectable()
export class ShopEntityService {
  constructor(
    @InjectRepository(Shop)
    private readonly shopRepository: Repository<Shop>,
  ) {}

  async create(dto: CreateShopDto): Promise<Shop> {
    const shop = this.shopRepository.create(dto);

    return await this.shopRepository.save(shop);
  }
}
