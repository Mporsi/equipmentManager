import { Controller, Get } from '@nestjs/common';
import { EquipmentManagementHistoryService } from './equipment-management-history.service';

@Controller()
export class EquipmentManagementHistoryController {
  constructor(private readonly equipmentManagementHistoryService: EquipmentManagementHistoryService) {}

  @Get()
  getHello(): string {
    return this.equipmentManagementHistoryService.getHello();
  }
}
