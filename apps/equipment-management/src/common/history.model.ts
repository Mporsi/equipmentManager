export interface HistoryModel {
  id: string;
  agentId: string;
  action: string; // For now this is a string, eventually this should be a finite set of actions
  orderId: string;
}
