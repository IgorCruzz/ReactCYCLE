import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,  
 } from 'typeorm'

@Entity()
export class Avatar { 
  @PrimaryGeneratedColumn()
  id: number
  
  @Column()
  name: string 

  @Column()
  url: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}