import { Injectable } from '@nestjs/common';
import { CreateResponsableDto } from './dto/create-responsable.dto';
import { UpdateResponsableDto } from './dto/update-responsable.dto';

@Injectable()
export class ResponsableService {
  private responsables = [];

  create(createResponsableDto: CreateResponsableDto) {
    const nuevoResponsable = {
      id: Date.now(),
      ...createResponsableDto,
    };
    this.responsables.push(nuevoResponsable);
    return nuevoResponsable;
  }

  findAll() {
    return this.responsables;
  }

  findOne(id: number) {
    return this.responsables.find(responsable => responsable.id === id);
  }

  update(id: number, updateResponsableDto: Partial<CreateResponsableDto>) {
    const responsable = this.findOne(id);
    if (responsable) {
      Object.assign(responsable, updateResponsableDto);
      return responsable;
    }
    return null;
  }

  remove(id: number) {
    const index = this.responsables.findIndex(responsable => responsable.id === id);
    if (index > -1) {
      this.responsables.splice(index, 1);
      return true;
    }
    return false;
  }
}