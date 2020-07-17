import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Contact {
  constructor(data?: {
    id?: number;
    name?: string;
    email?: string;
    phone?: string;
    order?: string;
    message?: string;
    created_at?: Date;
    updated_at?: Date;
  }) {
    this.id = data?.id || NaN;
    this.name = data?.name || '';
    this.email = data?.email || '';
    this.phone = data?.phone || '';
    this.order = data?.order || '';
    this.message = data?.message || '';
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  order: string;

  @Column()
  message: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
