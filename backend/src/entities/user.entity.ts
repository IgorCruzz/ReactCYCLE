import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  CreateDateColumn, 
  UpdateDateColumn,  
} from 'typeorm'
 


@Entity()
export class User {   

  constructor(user?: {
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
      this.id = user?.id || 1
      this.name = user?.name || ''
      this.email = user?.email || '' 
      this.password = user?.password || ''
      this.cpf  = user?.cpf || ''
      this.cnpj = user?.cnpj || ''
      this.stateRegistration = user?.stateRegistration || ''
      this.companyName = user?.companyName || '' 
      this.phone = user?.phone || ''
      this.gender = user?.gender || ''
      this.birth = user?.birth || NaN
      this.cep = user?.cep || ''
      this.address = user?.address || ''
      this.number = user?.number || NaN
      this.complement = user?.complement || ''
      this.referency = user?.referency || ''
      this.neighborhood = user?.neighborhood || ''
      this.city = user?.city || ''
      this.state = user?.state || ''
      this.active = user?.active || false
      this.administrator = user?.administrator || false
      this.created_at = user?.created_at|| new Date() 
      this.updated_at = user?.updated_at || new Date()
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