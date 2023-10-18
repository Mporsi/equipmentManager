import { Module } from '@nestjs/common';
import { ServiceModule } from '../../service/service.module';
import {
  DefaultAgentListener,
  IAgentListener,
} from './listeners/default-agent-listener';

@Module({
  imports: [ServiceModule],
  providers: [{ provide: IAgentListener, useClass: DefaultAgentListener }],
})
export class AsyncListenerModule {}
