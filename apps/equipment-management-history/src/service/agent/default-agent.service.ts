import {Injectable, NotImplementedException} from '@nestjs/common';

import {IAgentStatus} from '../../common/agent-status.model';
import {AgentModel} from '../../common/agent.model';
import {IAgentRepository} from "../../data/agent/repositories/default-agent.repository";

export abstract class IAgentService {
  abstract asignOrder(orderId: string): Promise<any>;

  abstract getAgent(agentId: string): Promise<AgentModel>;

  abstract overrideAgentStatus(
    agentStatus: IAgentStatus,
  ): Promise<IAgentStatus>;

  abstract unassignOrderOnAgent(agentId: string): Promise<IAgentStatus>;
}

@Injectable()
export class DefaultAgentService implements IAgentService {

  constructor(private readonly agentRepository: IAgentRepository) {
  }

  asignOrder(orderId: string): Promise<any> {
    throw new NotImplementedException();
  }

  getAgent(agentId: string): Promise<AgentModel> {
    throw new NotImplementedException();
  }

  overrideAgentStatus(agentStatus: IAgentStatus): Promise<IAgentStatus> {
    throw new NotImplementedException();
  }

  unassignOrderOnAgent(agentId: string): Promise<IAgentStatus> {
    throw new NotImplementedException();
  }
}
