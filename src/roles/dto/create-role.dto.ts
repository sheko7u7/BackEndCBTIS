import { IsBoolean } from 'class-validator';

export class CreateRoleDto {
  @IsBoolean()
  TutorResponsable: boolean;

  @IsBoolean()
  Admin: boolean;

  @IsBoolean()
  Secretaria: boolean;

  @IsBoolean()
  PrefectoMaestro: boolean;
}
