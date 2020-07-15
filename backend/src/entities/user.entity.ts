import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'



@Entity()
export class User {

  constructor(data ?: {
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
  }) {
    this.id = data?.id || NaN
    this.name = data?.name || ''
    this.email = data?.email || ''
    this.password = data?.password || ''
    this.cnpj = data?.cnpj || '',
    this.stateRegistration = data?.stateRegistration || ''
    this.companyName = data?.companyName || ''
    this.cpf = data?.cpf || ''
    this.phone = data?.phone || ''
    this.gender = data?.gender || ''
    this.birth = data?.birth || NaN
    this.cep = data?.cep || ''
    this.address = data?.address || ''
    this.number = data?.number || NaN
    this.complement = data?.complement || ''
    this.referency = data?.referency || ''
    this.neighborhood = data?.neighborhood || ''
    this.city = data?.city || ''
    this.state = data?.state || ''
    this.active = data?.active || false
    this.administrator = data?.administrator || false
    this.created_at = data?.created_at || new Date()
    this.updated_at = data?.updated_at || new Date()
  }

  @PrimaryGeneratedColumn('increment')
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
