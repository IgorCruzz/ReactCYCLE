import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Avatar1590623239387 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: 'avatar',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'increment',
                    isNullable: false
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'url',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
