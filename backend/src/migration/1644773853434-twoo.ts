import {MigrationInterface, QueryRunner} from "typeorm";

export class twoo1644773853434 implements MigrationInterface {
    name = 'twoo1644773853434'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "item" ADD "image" character varying(300) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "item" ADD "image" character varying(300) NOT NULL`);
    }

}
