import { IsString, MinLength, IsEmail, IsOptional, IsPhoneNumber, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateResponsableDto {
  @IsString()
  @MinLength(3)
  Nombre: string;

  @IsString()
  @MinLength(3)
  ApellidoPaterno: string;

  @IsString()
  @MinLength(3)
  ApellidoMaterno: string;

  @IsEmail()
  CorreoElectronico: string;

  @IsOptional()
  @IsString()
  ImgPerfil?: string;

  @IsPhoneNumber('MX') // Supone que es un número de teléfono mexicano
  NumTelefono: string;

  @IsString()
  @MinLength(18)
  Curp: string;

  @IsString()
  Direccion: string;

  @IsDate()
  @Type(() => Date)
  FechaNacimiento: Date;
}
