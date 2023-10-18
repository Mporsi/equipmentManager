export class AgentUnassignedOrderEvent {
  agentId: string;

  constructor(agentId: string) {
    this.agentId = agentId;
  }
}
