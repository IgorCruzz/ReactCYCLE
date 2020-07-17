import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Token1590619772869 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
         await queryRunner.createTable(new Table({
            name: 'token',
            columns: [
                {
                    name: 'user_id',
                    type: 'integer',
                    isPrimary: true
                },
                {
                    name: 'token',
                    type: 'varchar'
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
            ],
            foreignKeys: [
                {
                    columnNames: ['user_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'user',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
