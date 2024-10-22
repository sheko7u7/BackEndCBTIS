import { IsString, MinLength, IsEmail, IsPhoneNumber, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateAdministrativoDto {
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

  @IsPhoneNumber('MX')
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
