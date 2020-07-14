import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
// Entidade => Algo que vai ser guardado numa db
// Column =>
// PrimaryGeneratedColumn => É utilizado no id pois é a chave primária da tabela e é gerado de forma automática

import User from './User';

@Entity('appointments') // Entity decorator é como uma função que envia como parâmetro envia a class
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column() // Utiliza varchar default
  provider_id: string; // provider_id é um user

  @ManyToOne(() => User)
  @JoinColumn({ name: 'provider_id' })
  provider: User;

  @Column('timestamp with time zone')
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Appointment;
