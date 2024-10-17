import { Injectable } from '@nestjs/common';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';

@Injectable()
export class AlumnoService {
  private alumnos = [];

  create(createAlumnoDto: CreateAlumnoDto) {
    const nuevoAlumno = {
      id: Date.now(),
      ...createAlumnoDto,
    };
    this.alumnos.push(nuevoAlumno);
    return nuevoAlumno;
  }

  findAll() {
    return this.alumnos;
  }

  findOne(id: number) {
    return this.alumnos.find(alumno => alumno.id === id);
  }

  update(id: number, updateAlumnoDto: Partial<CreateAlumnoDto>) {
    const alumno = this.findOne(id);
    if (alumno) {
      Object.assign(alumno, updateAlumnoDto);
      return alumno;
    }
    return null;
  }

  remove(id: number) {
    const index = this.alumnos.findIndex(alumno => alumno.id === id);
    if (index > -1) {
      this.alumnos.splice(index, 1);
      return true;
    }
    return false;
  }
}