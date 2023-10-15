import { Test, TestingModule } from '@nestjs/testing';
import { EquipmentManagementAsyncService } from './equipment-management-async.service';

describe('EquipmentManagementAsyncService', () => {
  let service: EquipmentManagementAsyncService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EquipmentManagementAsyncService],
    }).compile();

    service = module.get<EquipmentManagementAsyncService>(EquipmentManagementAsyncService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
