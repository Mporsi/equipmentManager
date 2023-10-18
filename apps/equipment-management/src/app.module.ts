import { Module } from '@nestjs/common';
import { ApiModule } from './management/api/api.module';
import { EquipmentHistoryModule } from './history/equipment-history.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    EventEmitterModule.forRoot(),
    ApiModule,
    EquipmentHistoryModule,
  ],
})
export class AppModule {}
