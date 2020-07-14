import { 
  Entity,
  PrimaryColumn,
  Column,
  OneToOne,
  JoinColumn
 } from 'typeorm'
import { Avatar } from './avatar.entity'

 @Entity()
 export class Product{ 
   @PrimaryColumn()   
   id: number

   @Column()
   name: string

   @Column()
   price: number

   @Column()
   quantity: number

   @Column()
   avatar: number   
 
   @OneToOne/* istanbul ignore next */(() => Avatar) 
   @JoinColumn({ name: 'avatar'})
   avatar_data: Avatar

   @Column()
   category: string

   @Column()
   created_at: Date

   @Column()
   updated_at: Date
 }