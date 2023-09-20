import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1695219606622 implements MigrationInterface {
    name = 'Init1695219606622'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "devices_locations_comments" ("id" SERIAL NOT NULL, "comment" character varying NOT NULL, "location_id" integer NOT NULL, CONSTRAINT "PK_b4dcb8e602c758aa94554a0adab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "devices_locations" ("id" SERIAL NOT NULL, "coords" character varying NOT NULL, "device_id" integer NOT NULL, CONSTRAINT "PK_cb85a8487a372271681bd01cd1c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "devices" ("id" SERIAL NOT NULL, "model" character varying NOT NULL, CONSTRAINT "PK_b1514758245c12daf43486dd1f0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_devices" ("id" SERIAL NOT NULL, "issued_at" TIMESTAMP WITH TIME ZONE NOT NULL, "user_id" integer NOT NULL, "device_id" integer NOT NULL, CONSTRAINT "PK_984434640f7ccaa3c1419312ff1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "devices_locations_comments" ADD CONSTRAINT "FK_9c4edf51a637f30ff59aa3f4aaa" FOREIGN KEY ("location_id") REFERENCES "devices_locations"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "devices_locations" ADD CONSTRAINT "FK_4dfdb6b6980cb10efb8d531fd07" FOREIGN KEY ("device_id") REFERENCES "devices"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_devices" ADD CONSTRAINT "FK_5c1e33b849f11ac223b6192d2df" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_devices" ADD CONSTRAINT "FK_7d3640c873c0cd3cfad4eb6de91" FOREIGN KEY ("device_id") REFERENCES "devices"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_devices" DROP CONSTRAINT "FK_7d3640c873c0cd3cfad4eb6de91"`);
        await queryRunner.query(`ALTER TABLE "users_devices" DROP CONSTRAINT "FK_5c1e33b849f11ac223b6192d2df"`);
        await queryRunner.query(`ALTER TABLE "devices_locations" DROP CONSTRAINT "FK_4dfdb6b6980cb10efb8d531fd07"`);
        await queryRunner.query(`ALTER TABLE "devices_locations_comments" DROP CONSTRAINT "FK_9c4edf51a637f30ff59aa3f4aaa"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "users_devices"`);
        await queryRunner.query(`DROP TABLE "devices"`);
        await queryRunner.query(`DROP TABLE "devices_locations"`);
        await queryRunner.query(`DROP TABLE "devices_locations_comments"`);
    }

}
