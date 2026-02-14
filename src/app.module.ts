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
      password: '030102', // 도혁님의 비번
      database: 'postgres',
      entities: [Deal, AuditLog],
      synchronize: true,
    }),
    // [중요] 설계도를 실제 DB 작업에 사용할 수 있게 등록합니다.
    TypeOrmModule.forFeature([Deal, AuditLog]),
  ],
  controllers: [AppController], // [핵심] 안내 데스크 배치!
  providers: [AppService], // [핵심] 요리사 배치!
})
export class AppModule {}
