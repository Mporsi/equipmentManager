import { ApiProperty } from '@nestjs/swagger';
import { IAgentStatus } from '../../../../../common/agent-status.model';
import { EquipmentState } from '../../../../../common/equipment-state.enum';

export class SetAgentStatusDto implements IAgentStatus {
  @ApiProperty()
  currentOrder: string;

  @ApiProperty({
    enum: Object.keys(EquipmentState),
  })
  state: EquipmentState;
}
