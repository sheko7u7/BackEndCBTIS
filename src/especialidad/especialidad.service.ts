import { Injectable } from '@nestjs/common';
import { CreateEspecialidadDto } from './dto/create-especialidad.dto';
import { UpdateEspecialidadDto } from './dto/update-especialidad.dto';

@Injectable()
export class EspecialidadService {
  private especialidades = [];

  create(createEspecialidadDto: CreateEspecialidadDto) {
    const nuevaEspecialidad = {
      id: Date.now(),
      ...createEspecialidadDto,
    };
    this.especialidades.push(nuevaEspecialidad);
    return nuevaEspecialidad;
  }

  findAll() {
    return this.especialidades;
  }

  findOne(id: number) {
    return this.especialidades.find(especialidad => especialidad.id === id);
  }

  update(id: number, updateEspecialidadDto: Partial<CreateEspecialidadDto>) {
    const especialidad = this.findOne(id);
    if (especialidad) {
      Object.assign(especialidad, updateEspecialidadDto);
      return especialidad;
    }
    return null;
  }

  remove(id: number) {
    const index = this.especialidades.findIndex(especialidad => especialidad.id === id);
    if (index > -1) {
      this.especialidades.splice(index, 1);
      return true;
    }
    return false;
  }
}