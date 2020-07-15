import {
  Entity,
  PrimaryColumn,
  Column,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
 } from 'typeorm'
import { Avatar } from './avatar.entity'

 @Entity()
 export class Product{

  constructor(data ?: {
    id?: number,
    name?: string,
    price?: number,
    quantity?: number,
    avatar?: number,
    avatar_data?: Avatar,
    category?: string,
    created_at?: Date
    updated_at?: Date
  }){
    this.id = data?.id || NaN
    this.name = data?.name || ''
    this.price = data?.price || NaN
    this.quantity = data?.quantity || NaN
    this.avatar = data?.avatar || NaN
    this.category = data?.category || ''
    this.avatar_data = data?.avatar_data || null
    this.created_at = new Date()
    this.updated_at = new Date()
  }

   @PrimaryGeneratedColumn('increment')
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

   @CreateDateColumn()
   created_at: Date

   @UpdateDateColumn()
   updated_at: Date
 }
