import { IsString, MinLength, IsNumber, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateAvisosDto {
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
