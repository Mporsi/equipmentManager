import {AgentModel} from "../../../common/agent.model";

export abstract class IAgentRepository {
abstract findAgentById(agentId: string): Promise<AgentModel>;
abstract updateAgent(agent: AgentModel): Promise<AgentModel>;
abstract createAgent(agent: AgentModel): Promise<AgentModel>;
abstract deleteAgent(agentId: string): Promise<AgentModel>;
abstract findAllAgents(): Promise<AgentModel[]>;
abstract findAgentByStatus(status: string): Promise<AgentModel[]>;
abstract findAgentByOrderId(orderId: string): Promise<AgentModel>;
}

export class DefaultAgentRepository implements IAgentRepository {
    findAgentById(agentId: string): Promise<AgentModel> {
        throw new Error("Method not implemented.");
    }
    updateAgent(agent: AgentModel): Promise<AgentModel> {
        throw new Error("Method not implemented.");
    }
    createAgent(agent: AgentModel): Promise<AgentModel> {
        throw new Error("Method not implemented.");
    }
    deleteAgent(agentId: string): Promise<AgentModel> {
        throw new Error("Method not implemented.");
    }
    findAllAgents(): Promise<AgentModel[]> {
        throw new Error("Method not implemented.");
    }
    findAgentByStatus(status: string): Promise<AgentModel[]> {
        throw new Error("Method not implemented.");
    }
    findAgentByOrderId(orderId: string): Promise<AgentModel> {
        throw new Error("Method not implemented.");
    }
}