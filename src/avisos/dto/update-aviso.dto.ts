import { PartialType } from '@nestjs/mapped-types';
import { CreateAvisoDto } from './create-aviso.dto';  // Ahora coincide correctamente

export class UpdateAvisoDto extends PartialType(CreateAvisoDto) {}
