import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { IAgentService } from '../../../../service/agent/default-agent.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SetAgentStatusDto } from '../dtos/set-agent-status.dto';
import { IAgentStatus } from '../../../../../common/agent-status.model';

export abstract class IAgentController {
  abstract setAgentStatus(
    agentId: string,
    agentStatusData: SetAgentStatusDto,
  ): Promise<IAgentStatus>;

  abstract asignOrder(agentId: string, orderId: string): Promise<IAgentStatus>;

  abstract unassignOrderOnAgent(agentId: string): Promise<IAgentStatus>;
}

@ApiTags('Agent')
@Controller('agents/:agentId')
export class AgentController implements IAgentController {
  constructor(private readonly agentService: IAgentService) {}

  @Post('assignOrder')
  @ApiOperation({
    summary: 'assign a specific order to an agent',
  })
  async asignOrder(
    @Param('agentId') agentId: string,
    @Body() orderId: string,
  ): Promise<IAgentStatus> {
    return await this.agentService.asignOrderToAgent(agentId, orderId);
  }

  @Post('setStatus')
  @ApiOperation({
    summary: 'Set the status of an agent',
  })
  async setAgentStatus(
    @Param('agentId') agentId: string,
    @Body() agentStatusData: SetAgentStatusDto,
  ): Promise<IAgentStatus> {
    return await this.agentService.overrideAgentStatus(
      agentId,
      agentStatusData,
    );
  }

  @Post('unassignOrderOnAgent')
  @ApiOperation({
    summary: 'unassign order on an agent',
  })
  unassignOrderOnAgent(
    @Param('agentId') agentId: string,
  ): Promise<IAgentStatus> {
    return this.agentService.unassignOrderOnAgent(agentId);
  }
}
