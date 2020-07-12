import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  CreateDateColumn, 
  UpdateDateColumn,  
} from 'typeorm'
 


@Entity()
export class User {   

  constructor(
  {
  id,
  name,
  email, 
  password,
  cpf,
  cnpj,
  stateRegistration,
  companyName, 
  phone,
  gender,
  birth,
  cep,
  address,
  number,
  complement,
  referency,
  neighborhood,
  city,
  state,
  active,
  administrator,
  created_at, 
  updated_at
  }: {
  id?: number,
  name?: string,
  email?: string, 
  password?: string,
  cpf?: string,
  cnpj?: string,
  stateRegistration?: string,
  companyName?: string, 
  phone?: string,
  gender?: string,
  birth?: number,
  cep?: string,
  address?: string,
  number?: number,
  complement?: string,
  referency?: string,
  neighborhood?: string,
  city?: string,
  state?: string,
  active?: boolean,
  administrator?: boolean,
  created_at?: Date, 
  updated_at?: Date, 
  }  
  ){
    this.id =id || 1
    this.name = name || ''
    this.email = email || '' 
    this.password = password || ''
    this.cpf  = cpf || ''
    this.cnpj = cnpj || ''
    this.stateRegistration = stateRegistration || ''
    this.companyName = companyName || '' 
    this.phone = phone || ''
    this.gender = gender || ''
    this.birth = birth || NaN
    this.cep = cep || ''
    this.address = address || ''
    this.number = number || NaN
    this.complement = complement || ''
    this.referency = referency || ''
    this.neighborhood = neighborhood || ''
    this.city = city || ''
    this.state = state || ''
    this.active = active || false
    this.administrator = administrator || false
    this.created_at = created_at|| new Date() 
    this.updated_at = updated_at || new Date()
  }

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