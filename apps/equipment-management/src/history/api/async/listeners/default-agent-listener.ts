import { Injectable } from '@nestjs/common';
import { AgentStatusUpdatedEvent } from '@app/equipment-management-lib/events/agent/payloads/agent-status-updated.event';
import { AgentEvents } from '@app/equipment-management-lib/events/agent/agent.events';
import { OnEvent } from '@nestjs/event-emitter';
import { AgentUnassignedOrderEvent } from '@app/equipment-management-lib';
import { IAgentHistoryService } from '../../../service/default-agent-history.service';

export abstract class IAgentListener {
  abstract onAgentStatusUpdated(eventPayload: AgentStatusUpdatedEvent): void;
  abstract onAgentUnassignedOrder(
    eventPayload: AgentUnassignedOrderEvent,
  ): void;
}

@Injectable()
export class DefaultAgentListener implements IAgentListener {
  constructor(private readonly agentHistoryService: IAgentHistoryService) {}

  @OnEvent(AgentEvents.AGENT_STATUS_UPDATED, { async: true })
  onAgentStatusUpdated(eventPayload: AgentStatusUpdatedEvent): void {
    this.agentHistoryService.saveStatusUpdate(eventPayload);
  }

  @OnEvent(AgentEvents.AGENT_UNASSIGNED_ORDER, { async: true })
  onAgentUnassignedOrder(eventPayload: AgentUnassignedOrderEvent): void {
    this.agentHistoryService.saveAgentUnassignedOrder(eventPayload);
  }
}
