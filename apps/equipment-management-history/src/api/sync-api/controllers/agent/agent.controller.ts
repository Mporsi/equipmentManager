import { Controller } from '@nestjs/common';
import { IAgentStatus } from '../../../../common/agent-status.model';
import { IAgentService } from '../../../../service/agent/default-agent.service';

export abstract class IAgentController {
  abstract getAgentStatus(agentId: string): Promise<IAgentStatus>;
  abstract setAgentStatus(agentStatus: IAgentStatus): Promise<IAgentStatus>;
  abstract asignOrder(orderId: string): Promise<IAgentStatus>;
  abstract unassignOrderOnAgent(agentId: string): Promise<IAgentStatus>;
}

@Controller('agent')
export class AgentController implements IAgentController {
  constructor(private readonly agentService: IAgentService) {}
  async asignOrder(orderId: string): Promise<IAgentStatus> {
    return await this.agentService.asignOrder(orderId);
  }

  async getAgentStatus(agentId: string): Promise<IAgentStatus> {
    const agent = await this.agentService.getAgent(agentId);
    return agent.status;
  }

  async setAgentStatus(agentStatus: IAgentStatus): Promise<IAgentStatus> {
    return await this.agentService.overrideAgentStatus(agentStatus);
  }

  unassignOrderOnAgent(agentId: string): Promise<IAgentStatus> {
    return this.agentService.unassignOrderOnAgent(agentId);
  }
}
