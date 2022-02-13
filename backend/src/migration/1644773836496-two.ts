import {MigrationInterface, QueryRunner} from "typeorm";

export class two1644773836496 implements MigrationInterface {
    name = 'two1644773836496'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "item" ADD "image" character varying(300) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "item" ADD "image" character varying(300) NOT NULL`);
    }

}
