import { Module } from '@nestjs/common';
import { EquipmentManagementHistoryController } from './equipment-management-history.controller';
import { EquipmentManagementHistoryService } from './equipment-management-history.service';

@Module({
  imports: [],
  controllers: [EquipmentManagementHistoryController],
  providers: [EquipmentManagementHistoryService],
})
export class EquipmentManagementHistoryModule {}
