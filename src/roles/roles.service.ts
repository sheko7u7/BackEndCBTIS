import { Injectable } from '@nestjs/common';
import { CreateRolDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RolesService {
  private roles = [];

  create(createRolDto: CreateRolDto) {
    const nuevoRol = {
      id: Date.now(),
      ...createRolDto,
    };
    this.roles.push(nuevoRol);
    return nuevoRol;
  }

  findAll() {
    return this.roles;
  }

  findOne(id: number) {
    return this.roles.find(rol => rol.id === id);
  }

  update(id: number, updateRolDto: Partial<CreateRolDto>) {
    const rol = this.findOne(id);
    if (rol) {
      Object.assign(rol, updateRolDto);
      return rol;
    }
    return null;
  }

  remove(id: number) {
    const index = this.roles.findIndex(rol => rol.id === id);
    if (index > -1) {
      this.roles.splice(index, 1);
      return true;
    }
    return false;
  }
}