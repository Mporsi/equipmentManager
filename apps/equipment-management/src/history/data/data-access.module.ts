import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgentHistoryItemEntity } from './entities/agent-history-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AgentHistoryItemEntity])],
})
export class DataAccessModule {}
