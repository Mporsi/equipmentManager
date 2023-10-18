import {
  Injectable,
  Logger,
  LoggerService,
  NotImplementedException,
} from '@nestjs/common';

import { IAgentRepository } from '../../data/agent/repositories/default-agent.repository';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { OrderEvents } from '@app/equipment-management-lib/events/order/order.events';
import { AgentEvents } from '@app/equipment-management-lib/events/agent/agent.events';
import { OrderAssignedEvent } from '@app/equipment-management-lib/events/order/payloads/order-assigned.event';
import { AgentStatusUpdatedEvent } from '@app/equipment-management-lib/events/agent/payloads/agent-status-updated.event';
import { EquipmentState } from '../../../common/equipment-state.enum';
import { AgentModel } from '../../../common/agent.model';
import { IAgentStatus } from '../../../common/agent-status.model';

export abstract class IAgentService {
  abstract asignOrderToAgent(agentId: string, orderId: string): Promise<any>;

  abstract getAgent(agentId: string): Promise<AgentModel>;

  abstract overrideAgentStatus(
    agentId: string,
    agentStatus: IAgentStatus,
  ): Promise<IAgentStatus>;

  abstract unassignOrderOnAgent(agentId: string): Promise<IAgentStatus>;
}

@Injectable()
export class DefaultAgentService implements IAgentService {
  private readonly logger: Logger;
  constructor(
    private readonly agentRepository: IAgentRepository,
    private eventEmitter: EventEmitter2,
  ) {
    this.logger = new Logger('DefaultAgentService');
  }

  asignOrderToAgent(agentId: string, orderId: string): Promise<any> {
    /*
     * Do what needs to be done in order to have a order assigned to a agent. . .
     * */

    this.eventEmitter.emit(
      OrderEvents.ORDER_ASSIGNED,
      new OrderAssignedEvent(orderId, agentId),
    );
    this.logger.log('Order assigned event emitted');
    return Promise.resolve();
  }

  getAgent(agentId: string): Promise<AgentModel> {
    throw new NotImplementedException();
  }

  overrideAgentStatus(
    agentId: string,
    agentStatus: IAgentStatus,
  ): Promise<IAgentStatus> {
    this.eventEmitter.emit(
      AgentEvents.AGENT_STATUS_UPDATED,
      new AgentStatusUpdatedEvent(
        agentId,
        agentStatus,
        'overrid status manually',
      ),
    );
    this.logger.log('Agent status updated event emitted');
    return Promise.resolve(agentStatus);
  }

  unassignOrderOnAgent(agentId: string): Promise<IAgentStatus> {
    this.eventEmitter.emit(
      AgentEvents.AGENT_UNASSIGNED_ORDER,
      new AgentStatusUpdatedEvent(
        agentId,
        {
          state: EquipmentState.RED,
          currentOrder: null,
        },
        'unassigned order on agent',
      ),
    );
    throw new NotImplementedException();
  }
}
