import { EquipmentState } from './equipment-state.enum';

export interface IAgentStatus {
  currentlyWorking: EquipmentState;
  currentOrder: string;
}
