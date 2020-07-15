import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
// Entidade => Algo que vai ser guardado numa db
// Column =>
// PrimaryGeneratedColumn => É utilizado no id pois é a chave primária da tabela e é gerado de forma automática

@Entity('users') // Entity decorator é como uma função que envia como parâmetro envia a class
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column() // Utiliza varchar default
  name: string;

  @Column() // Utiliza varchar default
  email: string;

  @Column() // Utiliza varchar default
  password: string;

  @Column() // Utiliza varchar default
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
