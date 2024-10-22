import { Injectable } from '@nestjs/common';
import { CreateAvisoDto } from './dto/create-aviso.dto';  // Ahora coincide correctamente
import { UpdateAvisoDto } from './dto/update-aviso.dto';

@Injectable()
export class AvisosService {
  private avisos = [];

  create(createAvisoDto: CreateAvisoDto) {  // Ahora coincide correctamente
    const nuevoAviso = {
      id: Date.now(),
      ...createAvisoDto,
    };
    this.avisos.push(nuevoAviso);
    return nuevoAviso;
  }

  findAll() {
    return this.avisos;
  }

  findOne(id: number) {
    return this.avisos.find(aviso => aviso.id === id);
  }

  update(id: number, updateAvisoDto: Partial<CreateAvisoDto>) {
    const aviso = this.findOne(id);
    if (aviso) {
      Object.assign(aviso, updateAvisoDto);
      return aviso;
    }
    return null;
  }

  remove(id: number) {
    const index = this.avisos.findIndex(aviso => aviso.id === id);
    if (index > -1) {
      this.avisos.splice(index, 1);
      return true;
    }
    return false;
  }
}
