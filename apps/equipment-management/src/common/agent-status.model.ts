import { EquipmentState } from './equipment-state.enum';

export interface IAgentStatus {
  state: EquipmentState;
  currentOrder: string;
}
