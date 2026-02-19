import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; // [1] 비서를 불러오는 마법 도구
import { Repository } from 'typeorm'; // [2] 비서의 직함(타입)
import { Deal } from './entities/deal.entity'; // [3] 다룰 설계도(엔티티)

@Injectable()
export class AppService {
  constructor(
    // 생성자: 이 부서가 가동될 때 필요한 장비를 여기서 챙깁니다.
    @InjectRepository(Deal) // "Deal 설계도를 다루는 비서를 보내줘!"
    private dealRepository: Repository<Deal>, // 이제부터 dealRepository라고 부르겠다는 뜻입니다.
  ) {}

  // 실제 데이터를 저장하는 '요리(함수)'입니다.
  async createDeal(productName: string, price: number) {
    // [A] 비서에게 설계도 양식에 맞춰 새 데이터를 만들라고 시킵니다.
    const newDeal = this.dealRepository.create({
      productName,
      price,
    });

    // [B] 만든 데이터를 DB 금고에 실제로 집어넣고(save), 그 결과를 돌려받습니다.
    return await this.dealRepository.save(newDeal); //
  }

  async findAllDeals() {
    return await this.dealRepository.find(); //장부(Entity)에 있는 모든 데이터를 찾아라
  }

  async findOneDeal(id: string) {
    return await this.dealRepository.findOneBy({ id });
  }

  async updateDeal(id: string, updateData: any) {
    await this.dealRepository.update(id, updateData);
    return this.findOneDeal(id);
  }
}
