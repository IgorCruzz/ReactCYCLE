import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn  } from 'typeorm'

@Entity()
export class Contact { 

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