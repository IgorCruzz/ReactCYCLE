import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class users1590525724420 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: 'user',
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
                    name: 'email',
                    type: 'varchar',
                    isUnique: true,
                    isNullable: false
                },
                {
                    name: 'password',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'cpf',
                    type: 'varchar',
                    isUnique: true,
                    isNullable: true
                },
                {
                    name: 'cnpj',
                    type: 'varchar',
                    isUnique: true,
                    isNullable: true                    
                }, 
                {
                    name: 'stateRegistration',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'companyName',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'phone',
                    type: 'varchar'
                },
                {
                    name: 'gender',
                    type: 'varchar'
                },
                {
                    name: 'birth',
                    type: 'varchar'
                },
                {
                    name: 'cep',
                    type: 'varchar'
                },
                {
                    name: 'address',
                    type: 'varchar'
                },
                {
                    name: 'number',
                    type: 'varchar'
                },
                {
                    name: 'complement',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'referency',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'neighborhood',
                    type: 'varchar'
                },
                {
                    name: 'city',
                    type: 'varchar'
                },
                {
                    name: 'state',
                    type: 'varchar'
                },
                {
                    name: 'active',
                    type: 'boolean',
                    default: false
                },
                {
                    name: 'administrator',
                    type: 'boolean',
                    default: false
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
