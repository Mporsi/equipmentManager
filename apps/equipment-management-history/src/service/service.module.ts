import { Module } from '@nestjs/common';
import { DefaultAgentService, IAgentService } from './agent/default-agent.service';
import {DataModule} from "../data/data.module";

@Module({
  imports: [DataModule],
  providers: [{ provide: IAgentService, useClass: DefaultAgentService }],
  exports: [IAgentService],
})
export class ServiceModule {}
