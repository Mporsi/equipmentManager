import { DataSource } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { AgentHistoryItemEntity } from './history/data/entities/agent-history-item.entity';

export const typeOrmConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'equipment-management', //Make sure to create this db in your local postgres instance
  synchronize: true,
  entities: [AgentHistoryItemEntity],
};
export const datasource = new DataSource(typeOrmConfig);
