import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableSettings1762717169369 implements MigrationInterface {
  name = 'CreateTableSettings1762717169369';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "setting" ("id" SERIAL NOT NULL, "variable" text NOT NULL, "value" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_85cddfeedcf28a18933ff06d0b6" UNIQUE ("variable"), CONSTRAINT "PK_fcb21187dc6094e24a48f677bed" PRIMARY KEY ("id"))`,
    );

    await queryRunner.query(`
        INSERT INTO setting (variable, value) VALUES ('SYSTEM_FIXED_COMMISSION_A', 450);
        INSERT INTO setting (variable, value) VALUES ('SYSTEM_PERCENTAGE_COMMISSION_B', 130);
        INSERT INTO setting (variable, value) VALUES ('BLOCKING_SUM_PERCENTAGE_D', 4000);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "setting"`);
  }
}
