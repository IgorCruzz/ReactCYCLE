import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  CreateDateColumn, 
  UpdateDateColumn,  
} from 'typeorm'
 


@Entity()
export class User {   

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string 

  @Column()
  password: string

  @Column()
  cpf: string

  @Column()
  cnpj: string

  @Column()
  stateRegistration: string

  @Column()
  companyName: string 

  @Column()
  phone: string

  @Column()
  gender: string

  @Column()
  birth: number

  @Column()
  cep: string

  @Column()
  address: string 

  @Column()
  number: number

  @Column()
  complement: string

  @Column()
  referency: string

  @Column()
  neighborhood: string

  @Column()
  city: string 

  @Column()
  state: string

  @Column()
  active: boolean 

  @Column()
  administrator: boolean

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date      
}