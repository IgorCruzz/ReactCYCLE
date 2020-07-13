import { 
  Entity, 
  Column,  
  CreateDateColumn,
  UpdateDateColumn,  
  PrimaryColumn
} from 'typeorm'


@Entity()
export class Token{
  constructor(
    user_id: number,
    token: string,
    created_at: Date,
    updated_at: Date
  ){
    this.user_id = user_id || NaN
    this.token = token || ''
    this.created_at = created_at || new Date()
    this.updated_at = updated_at || new Date()
  }
 
  @PrimaryColumn()
  user_id: number

  @Column()
  token: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

}
 