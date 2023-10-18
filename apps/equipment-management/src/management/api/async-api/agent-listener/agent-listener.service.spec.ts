import { Test, TestingModule } from '@nestjs/testing';
import { DefaultAgentListenerService } from './default-agent-listener.service';

describe('AgentListenerService', () => {
  let service: DefaultAgentListenerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DefaultAgentListenerService],
    }).compile();

    service = module.get<DefaultAgentListenerService>(
      DefaultAgentListenerService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
