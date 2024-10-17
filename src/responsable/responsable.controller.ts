import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResponsableService } from './responsable.service';
import { CreateResponsableDto } from './dto/create-responsable.dto';
import { UpdateResponsableDto } from './dto/update-responsable.dto';

@Controller('responsable')
export class ResponsableController {
  constructor(private readonly responsableService: ResponsableService) {}

  @Post()
  create(@Body() createResponsableDto: CreateResponsableDto) {
    return this.responsableService.create(createResponsableDto);
  }

  @Get()
  findAll() {
    return this.responsableService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.responsableService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResponsableDto: Partial<CreateResponsableDto>) {
    return this.responsableService.update(+id, updateResponsableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.responsableService.remove(+id);
  }
}