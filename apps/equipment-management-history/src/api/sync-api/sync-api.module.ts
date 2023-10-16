import { Module } from '@nestjs/common';
import { AgentController } from './controllers/agent/agent.controller';
import { OrderController } from './controllers/order/order.controller';
import { ServiceModule } from '../../service/service.module';

@Module({
  imports: [ServiceModule],
  providers: [AgentController, OrderController],
})
export class SyncApiModule {}
