import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreatedPayload } from '@app/equipment-management-lib/events/order/payloads/created-payload';
import { UpdatedPayload } from '@app/equipment-management-lib/events/order/payloads/updated-payload';
import { FinishedPayload } from '@app/equipment-management-lib/events/order/payloads/finished-payload';

export abstract class IOrderListener {
  abstract onOrderCreated(payload: CreatedPayload): Promise<void> | void;
  abstract onOrderUpdated(payload: UpdatedPayload): Promise<void> | void;
  abstract onOrderFinished(payload: FinishedPayload): Promise<void> | void;
}
@Injectable()
export class DefaultOrderListenerService implements IOrderListener {
  onOrderCreated(payload: CreatedPayload): Promise<void> | void {
    throw new NotImplementedException();
  }

  onOrderFinished(payload: FinishedPayload): Promise<void> | void {
    throw new NotImplementedException();
  }

  onOrderUpdated(payload: UpdatedPayload): Promise<void> | void {
    throw new NotImplementedException();
  }
}
