import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  TutorResponsable: boolean;

  @Column()
  Admin: boolean;

  @Column()
  Secretaria: boolean;

  @Column()
  PrefectoMaestro: boolean;

  @Column({ default: true })
  is_active: boolean;
}
