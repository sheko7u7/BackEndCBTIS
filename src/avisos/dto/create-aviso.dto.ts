// src/avisos/dto/create-aviso.dto.ts
import { IsString, MinLength, IsNumber, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateAvisoDto {  // Cambiado a CreateAvisoDto
  @IsString()
  @MinLength(3)
  Nombre: string;

  @IsString()
  @MinLength(10)
  Descripcion: string;

  @IsNumber()
  TotalDeIncidencias: number;

  @IsDate()
  @Type(() => Date)
  FechaDeAviso: Date;
}
