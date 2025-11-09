import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableShop1762721591198 implements MigrationInterface {
  name = 'CreateTableShop1762721591198';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "shop" ("id" SERIAL NOT NULL, "publicId" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "commissionValue" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_0aa36e1e41a739ccf6654c46cab" UNIQUE ("publicId"), CONSTRAINT "PK_ad47b7c6121fe31cb4b05438e44" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "shop"`);
  }
}
