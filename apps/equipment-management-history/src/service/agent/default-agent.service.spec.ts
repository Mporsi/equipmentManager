import {DefaultAgentService, IAgentService} from "./default-agent.service";
import {IAgentRepository} from "../../data/agent/repositories/default-agent.repository";
import {AgentModel} from "../../common/agent.model";
import {EquipmentState} from "../../common/equipment-state.enum";

describe('AgentListenerService', () => {
    let service: IAgentService;

    let agentRepository: jest.Mocked<IAgentRepository>;

    beforeEach(async () => {

        agentRepository = jest.mocked({
            findAgentById: jest.fn(),
            updateAgent:jest.fn(),
            createAgent:jest.fn(),
            deleteAgent:jest.fn(),
            findAllAgents:jest.fn(),
            findAgentByStatus:jest.fn(),
            findAgentByOrderId:jest.fn(),
        });
        service = new DefaultAgentService(agentRepository);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });



    it('should be able to find a single agents status', () => {
        const dummyAgent: AgentModel = {
            id: '1',
            status: {
                state: EquipmentState.GREEN,
                currentOrder: '1',
            },
        }

        agentRepository.findAgentById.mockResolvedValueOnce(dummyAgent);

        const result = service.getAgent('1')

        expect(result).toBeDefined();
        expect(agentRepository.findAgentById).toBeCalledWith('1');
    });

    it('should throw error if a agent is not found', () => {
        agentRepository.findAgentById.mockRejectedValueOnce(new Error('Agent not found'));

        expect(service.getAgent('1')).rejects.toThrowError();
    });
});
