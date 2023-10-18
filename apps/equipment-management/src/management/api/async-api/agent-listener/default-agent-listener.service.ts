import { Injectable, NotImplementedException } from '@nestjs/common';
import { RegisteredPayload } from '@app/equipment-management-lib/events/agent/payloads/registered-payload';
import { UnregisteredPayload } from '@app/equipment-management-lib/events/agent/payloads/unregistered-payload';
import { EnteredFaultPayload } from '@app/equipment-management-lib/events/agent/payloads/entered-fault-payload';

export abstract class IAgentListener {
  abstract onAgentRegistered(payload: RegisteredPayload): Promise<void>;
  abstract onAgentUnregistered(payload: UnregisteredPayload): Promise<void>;
  abstract onAgentEnteredFault(payload: EnteredFaultPayload): Promise<void>;
}

@Injectable()
export class DefaultAgentListenerService implements IAgentListener {
  onAgentEnteredFault(payload: EnteredFaultPayload): Promise<void> {
    throw new NotImplementedException();
  }

  onAgentRegistered(payload: RegisteredPayload): Promise<void> {
    throw new NotImplementedException();
  }

  onAgentUnregistered(payload: UnregisteredPayload): Promise<void> {
    throw new NotImplementedException();
  }
}
