import { Test, TestingModule } from '@nestjs/testing';
import { DefaultOrderListenerService } from './default-order-listener.service';

describe('OrderListenerService', () => {
  let service: DefaultOrderListenerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DefaultOrderListenerService],
    }).compile();

    service = module.get<DefaultOrderListenerService>(
      DefaultOrderListenerService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
