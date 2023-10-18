import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1697632499927 implements MigrationInterface {
    name = 'InitialMigration1697632499927'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "agent_history_items" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "agentId" character varying NOT NULL, "action" character varying NOT NULL, "orderId" character varying NOT NULL, CONSTRAINT "PK_c00e8c9a684ff6cb58c24b81bbd" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "agent_history_items"`);
    }

}
