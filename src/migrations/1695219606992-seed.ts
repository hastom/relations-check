import { MigrationInterface, QueryRunner } from "typeorm";

export class Seed1695219606622 implements MigrationInterface {
    name = 'Seed1695219606622'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO "users" VALUES (DEFAULT, 'rob'), (DEFAULT, 'alice'), (DEFAULT, 'bob')`)
        await queryRunner.query(`INSERT INTO "devices" VALUES (DEFAULT, 'samsung'), (DEFAULT, 'lg'), (DEFAULT, 'nokia')`)
        await queryRunner.query(`INSERT INTO "devices_locations" VALUES (DEFAULT, '1,2', 1), (DEFAULT, '2,3', 1), (DEFAULT, '3,5', 1), (DEFAULT, '5,6', 3), (DEFAULT, '123,123', 3)`)
        await queryRunner.query(`INSERT INTO "devices_locations_comments" VALUES (DEFAULT, 'Nice location', 1), (DEFAULT, '10/10', 1), (DEFAULT, 'Meh', 2), (DEFAULT, 'Bad location', 3)`)
        await queryRunner.query(`INSERT INTO "users_devices" VALUES (DEFAULT, '2022-01-01 12:00:00', 1, 1), (DEFAULT, '2022-03-10 22:12:00', 1, 3), (DEFAULT, '2022-12-30 00:10:00', 2, 2), (DEFAULT, '2023-01-01 12:39:00', 3, 1), (DEFAULT, '2022-01-01 12:00:00', 3, 3)`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
