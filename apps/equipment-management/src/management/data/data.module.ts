import { Module } from '@nestjs/common';
import {
  DefaultAgentRepository,
  IAgentRepository,
} from './agent/repositories/default-agent.repository';

/*
 * This module would be responsible for setting up the persistency of the application.
 * It would be responsible for setting up the database connection, and what ever data seed would be required.
 * */
@Module({
  providers: [{ provide: IAgentRepository, useClass: DefaultAgentRepository }],
  exports: [IAgentRepository],
})
export class DataModule {}
