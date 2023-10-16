import { Module } from '@nestjs/common';
import {
  DefaultAgentListenerService,
  IAgentListener,
} from './agent-listener/default-agent-listener.service';
import {
  DefaultOrderListenerService,
  IOrderListener,
} from './order-listener/default-order-listener.service';

@Module({
  providers: [
    { provide: IAgentListener, useClass: DefaultAgentListenerService },
    { provide: IOrderListener, useClass: DefaultOrderListenerService },
  ],
})
export class AsyncApiModule {}
