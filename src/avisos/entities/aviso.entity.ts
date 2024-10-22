import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Avisos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  Nombre: string;

  @Column('text')
  Descripcion: string;

  @Column()
  TotalDeIncidencias: number;

  @Column({ type: 'date' })
  FechaDeAviso: Date;
}
