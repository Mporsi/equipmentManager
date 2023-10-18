import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { HistoryModel } from '../../../common/history.model';

@Entity({
  name: 'agent_history_items',
})
export class AgentHistoryItemEntity implements HistoryModel {
  @PrimaryGeneratedColumn()
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  agentId: string;

  @Column()
  action: string;

  @Column()
  orderId: string;
}
