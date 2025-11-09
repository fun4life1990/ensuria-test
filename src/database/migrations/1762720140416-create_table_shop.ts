import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableShop1762720140416 implements MigrationInterface {
  name = 'CreateTableShop1762720140416';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "setting" ("id" SERIAL NOT NULL, "variable" text NOT NULL, "value" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_85cddfeedcf28a18933ff06d0b6" UNIQUE ("variable"), CONSTRAINT "PK_fcb21187dc6094e24a48f677bed" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "shop" DROP CONSTRAINT "UQ_b5bab1e13e7a4cc9c609802a116"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "shop" ADD CONSTRAINT "UQ_b5bab1e13e7a4cc9c609802a116" UNIQUE ("commissionValue")`,
    );
    await queryRunner.query(`DROP TABLE "setting"`);
  }
}
