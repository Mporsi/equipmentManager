import { Module } from '@nestjs/common';
import {
  DefaultAgentHistoryService,
  IAgentHistoryService,
} from './default-agent-history.service';

@Module({
  providers: [
    { provide: IAgentHistoryService, useClass: DefaultAgentHistoryService },
  ],
  exports: [IAgentHistoryService],
})
export class ServiceModule {}
