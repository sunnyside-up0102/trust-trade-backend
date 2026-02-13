import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('deal') // [1] "손님이 'deal'이라는 주소로 편지를 보내면 이 주문을 받아라!"
  async createDeal(
    @Body('productName') productName: string, // [2] "편지 내용 중 '상품이름'을 꺼내라"
    @Body('price') price: number, // [3] "편지 내용 중 '가격'을 꺼내라"
  ) {
    // [4] "자, 이제 주방에 이 재료를 전달해서 요리해달라고 시키자!"
    return await this.appService.createDeal(productName, price);
  }
}
