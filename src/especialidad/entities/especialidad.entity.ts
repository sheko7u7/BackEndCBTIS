import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Especialidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  Nombre: string;

  @Column({ default: true })
  is_active: boolean;
}
