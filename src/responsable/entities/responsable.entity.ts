import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Responsable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50 })
  ApellidoPaterno: string;

  @Column({ length: 50 })
  ApellidoMaterno: string;

  @Column({ length: 100 })
  CorreoElectronico: string;

  @Column({ nullable: true })
  ImgPerfil?: string; // Campo opcional

  @Column({ length: 15 })
  NumTelefono: string;

  @Column({ length: 18 })
  Curp: string;

  @Column()
  Direccion: string;

  @Column({ type: 'date' })
  FechaNacimiento: Date;

  @Column({ default: true })
  is_active: boolean;
}
