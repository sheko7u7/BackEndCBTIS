import { Injectable } from '@nestjs/common';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';

@Injectable()
export class GrupoService {
  private grupos = [];

  create(createGrupoDto: CreateGrupoDto) {
    const nuevoGrupo = {
      id: Date.now(),
      ...createGrupoDto,
    };
    this.grupos.push(nuevoGrupo);
    return nuevoGrupo;
  }

  findAll() {
    return this.grupos;
  }

  findOne(id: number) {
    return this.grupos.find(grupo => grupo.id === id);
  }

  update(id: number, updateGrupoDto: Partial<CreateGrupoDto>) {
    const grupo = this.findOne(id);
    if (grupo) {
      Object.assign(grupo, updateGrupoDto);
      return grupo;
    }
    return null;
  }

  remove(id: number) {
    const index = this.grupos.findIndex(grupo => grupo.id === id);
    if (index > -1) {
      this.grupos.splice(index, 1);
      return true;
    }
    return false;
  }
}