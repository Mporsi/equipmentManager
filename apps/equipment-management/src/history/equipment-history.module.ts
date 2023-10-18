import { Module } from '@nestjs/common';
import { ApiModule } from './api/api/api.module';
import { DataAccessModule } from './data/data-access.module';

/**
 * This module represent a completely decoupled application.
 * For ease of example it will be running in the same process as the main equipmentManager
 * In a real world senario this could either work as a seperated module like here or as its own application.
 * In either case the communication protocol is async and the two modules are not blocking eachother.
 * */
@Module({
  imports: [ApiModule, DataAccessModule],
})
export class EquipmentHistoryModule {}
