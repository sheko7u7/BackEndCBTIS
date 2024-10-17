import { Injectable } from '@nestjs/common';
import { CreateAdministrativoDto } from './dto/create-administrativo.dto';
import { UpdateAdministrativoDto } from './dto/update-administrativo.dto';

@Injectable()
export class AdministrativoService {
  private administrativos = [];

  create(createAdministrativoDto: CreateAdministrativoDto) {
    const nuevoAdministrativo = {
      id: Date.now(),
      ...createAdministrativoDto,
    };
    this.administrativos.push(nuevoAdministrativo);
    return nuevoAdministrativo;
  }

  findAll() {
    return this.administrativos;
  }

  findOne(id: number) {
    return this.administrativos.find(administrativo => administrativo.id === id);
  }

  update(id: number, updateAdministrativoDto: Partial<CreateAdministrativoDto>) {
    const administrativo = this.findOne(id);
    if (administrativo) {
      Object.assign(administrativo, updateAdministrativoDto);
      return administrativo;
    }
    return null;
  }

  remove(id: number) {
    const index = this.administrativos.findIndex(administrativo => administrativo.id === id);
    if (index > -1) {
      this.administrativos.splice(index, 1);
      return true;
    }
    return false;
  }
}