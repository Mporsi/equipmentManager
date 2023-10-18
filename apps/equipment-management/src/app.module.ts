import { Module } from '@nestjs/common';
import { ApiModule } from './management/api/api.module';
import { EquipmentHistoryModule } from './history/equipment-history.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [EventEmitterModule.forRoot(), ApiModule, EquipmentHistoryModule],
})
export class AppModule {}
