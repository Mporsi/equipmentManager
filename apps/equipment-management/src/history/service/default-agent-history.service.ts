import {
  AgentStatusUpdatedEvent,
  AgentUnassignedOrderEvent,
} from '@app/equipment-management-lib';

export abstract class IAgentHistoryService {
  abstract saveAgentUnassignedOrder(
    eventPayload: AgentUnassignedOrderEvent,
  ): void;
  abstract saveStatusUpdate(eventPayload: AgentStatusUpdatedEvent): void;
}
export class DefaultAgentHistoryService implements IAgentHistoryService {
  constructor() {}
  saveAgentUnassignedOrder(eventPayload: AgentUnassignedOrderEvent): void {}

  saveStatusUpdate(eventPayload: AgentStatusUpdatedEvent): void {}
}
