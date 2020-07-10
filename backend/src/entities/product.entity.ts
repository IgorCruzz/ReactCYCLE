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
  /*
   constructor({
     id,
     name,
     price,
     quantity,
     avatar,
     category,
     created_at,
     updated_at
   }: any) {
     this.id = id || NaN,
     this.name = name || '',
     this.quantity = quantity || NaN,
     this.price = price || NaN,
     this.avatar = avatar || NaN
     this.category = category || '',
     this.created_at = created_at || new Date(),
     this.updated_at = updated_at || new Date()
   }
   */

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

   @OneToOne(() => Avatar)
   @JoinColumn({ name: 'avatar'})
   avatar_data: Avatar

   @Column()
   category: string

   @Column()
   created_at: Date

   @Column()
   updated_at: Date
 }