import { Module } from '@nestjs/common';
import { EquipmentManagementAsyncService } from './equipment-management-async.service';

@Module({
  providers: [EquipmentManagementAsyncService],
  exports: [EquipmentManagementAsyncService],
})
export class EquipmentManagementAsyncModule {}
