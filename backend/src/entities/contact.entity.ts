import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn  } from 'typeorm'

@Entity()
export class Contact { 

  constructor(id?:number,
    name?: string,
    email?: string,
    phone?: string,
    order?: string,
    message?: string,
    created_at?: Date ,
    updated_at?: Date) {
      this.id = id || NaN
      this.name = name ||''
      this.email = email ||''
      this.phone = phone ||''
      this.order = order ||''
      this.message = message ||''
      this.created_at = created_at ||new Date()
      this.updated_at = updated_at ||new Date()
    }

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  phone: string

  @Column()
  order: string

  @Column()
  message: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}