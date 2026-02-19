import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller'; // [추가] 안내 데스크 불러오기
import { AppService } from './app.service'; // [추가] 요리사 불러오기
import { Deal } from './entities/deal.entity';
import { AuditLog } from './entities/audit-log.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '030102',
      database: 'postgres',
      entities: [Deal, AuditLog], //공장에서 사용할 설계도
      synchronize: true, //Entity와 Table 똑같게 유지. 개발 환경(localhost)에서'만' true로 둬야 함!
    }),
    // [중요] 설계도를 실제 DB 작업에 사용할 수 있게 등록합니다.
    TypeOrmModule.forFeature([Deal, AuditLog]),
  ],
  controllers: [AppController], //  안내 데스크 배치!
  providers: [AppService], //  요리사 배치!
})
export class AppModule {}
