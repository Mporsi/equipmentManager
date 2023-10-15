import { Test, TestingModule } from '@nestjs/testing';
import { EquipmentManagementHistoryController } from './equipment-management-history.controller';
import { EquipmentManagementHistoryService } from './equipment-management-history.service';

describe('EquipmentManagementHistoryController', () => {
  let equipmentManagementHistoryController: EquipmentManagementHistoryController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EquipmentManagementHistoryController],
      providers: [EquipmentManagementHistoryService],
    }).compile();

    equipmentManagementHistoryController = app.get<EquipmentManagementHistoryController>(EquipmentManagementHistoryController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(equipmentManagementHistoryController.getHello()).toBe('Hello World!');
    });
  });
});
