import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Product1590620728703 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
             name: 'product',
             columns: [
                 {
                     name: 'id',
                     type: 'integer',
                     isPrimary: true,
                     isGenerated: true,
                     generationStrategy: 'increment',
                     isNullable: false
                 },
                 {
                     name: 'name',
                     type: 'varchar',
                     isNullable: false
                 },
                 {
                     name: 'quantity',
                     type: 'varchar',
                     isNullable: false
                 },
                 {
                     name: 'price',
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
