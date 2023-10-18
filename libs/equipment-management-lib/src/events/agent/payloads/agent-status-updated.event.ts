import { IAgentStatus } from '../../../../../../apps/equipment-management/src/common/agent-status.model';

export class AgentStatusUpdatedEvent {
  agentId: string;
  agentStatus: IAgentStatus;
  reasonForStatusChange: string;

  constructor(
    agentId: string,
    agentStatus: IAgentStatus,
    reasonForStatusChange: string,
  ) {
    this.agentId = agentId;
    this.agentStatus = agentStatus;
    this.reasonForStatusChange = reasonForStatusChange;
  }
}
