import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deal } from './entities/deal.entity';
import { AuditLog } from './entities/audit-log.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // 설치 시 기본 아이디
      password: '030102', // 여기에 아까 설정한 비번 입력!
      database: 'postgres', // 기본 데이터베이스 이름
      entities: [Deal, AuditLog], // 우리가 만든 설계도 등록
      synchronize: true, // 설계도대로 DB를 자동으로 만들어주는 옵션 (개발용)
    }),
  ],
})
export class AppModule {}
