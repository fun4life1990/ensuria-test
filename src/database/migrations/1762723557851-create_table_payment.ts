import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTablePayment1762723557851 implements MigrationInterface {
  name = 'CreateTablePayment1762723557851';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "payment" ("id" SERIAL NOT NULL, "public_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "status" text NOT NULL, "amount" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "shop_id" integer, CONSTRAINT "UQ_c174202a3de99ecc95f090da799" UNIQUE ("public_id"), CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "payment" ADD CONSTRAINT "FK_f0662f97638fcfe621e3c371fa9" FOREIGN KEY ("shop_id") REFERENCES "shop"("id") ON DELETE RESTRICT ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "payment" DROP CONSTRAINT "FK_f0662f97638fcfe621e3c371fa9"`,
    );
    await queryRunner.query(`DROP TABLE "payment"`);
  }
}
