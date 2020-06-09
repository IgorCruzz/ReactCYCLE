import { 
  Entity, 
  Column,  
  CreateDateColumn,
  UpdateDateColumn,  
  PrimaryColumn
} from 'typeorm'


@Entity()
export class Token{
 
  @PrimaryColumn()
  user_id: string

  @Column()
  token: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

}
 