import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class contact1591641348979 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: 'contact',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isGenerated: true,
                    generationStrategy: 'increment',
                    isPrimary: true,              
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'phone',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'order',
                    type: 'varchar',
                    isNullable: false       
                },
                {
                    name: 'message',
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
