import { Module } from '@nestjs/common';
import { AgentService, IAgentService } from './agent/default-agent.service';

@Module({
  providers: [{ provide: IAgentService, useClass: AgentService }],
  exports: [IAgentService],
})
export class ServiceModule {}
