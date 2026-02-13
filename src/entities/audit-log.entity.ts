//변화 감지
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class AuditLog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  action: string; // 어떤 행동(행위)인지

  @Column({ type: 'jsonb', nullable: true })
  oldValue: any; // 변경 전 데이터

  @Column({ type: 'jsonb', nullable: true })
  newValue: any; // 변경 후 데이터

  @Column()
  actor: string; // 누가 했는지

  @CreateDateColumn()
  createdAt: Date; // 발생 시간
}
