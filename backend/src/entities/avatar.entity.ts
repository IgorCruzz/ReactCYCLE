import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Avatar {
  constructor(data?: {
    id?: number;
    name?: string;
    url?: string;
    created_at?: Date;
    updated_at?: Date;
  }) {
    this.id = NaN;
    this.name = data?.name || '';
    this.url = data?.url || '';
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
