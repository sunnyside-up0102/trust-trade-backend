//거래를 증명하는 법적 장부
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Deal {
  @PrimaryGeneratedColumn('uuid') // 고유 번호(무작위)
  id: string;

  @Column()
  productName: string; // 상품명

  @Column()
  price: number; // 가격

  @Column({ default: 'PENDING' }) // 상태
  status: string;

  @CreateDateColumn()
  createdAt: Date; // 생성 시간
}
