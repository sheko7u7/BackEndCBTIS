import { IsString, MinLength } from 'class-validator';

export class CreateEspecialidadDto {
  @IsString()
  @MinLength(3)
  Nombre: string;
}
