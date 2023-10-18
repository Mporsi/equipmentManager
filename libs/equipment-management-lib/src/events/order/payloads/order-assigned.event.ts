export class OrderAssignedEvent {
  agentId: string;
  orderId: string;

  constructor(agentId: string, orderId: string) {
    this.agentId = agentId;
    this.orderId = orderId;
  }
}
