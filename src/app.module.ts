import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResponsableModule } from './responsable/responsable.module';
import { AdministrativoModule } from './administrativo/administrativo.module';
import { AlumnoModule } from './alumno/alumno.module';
import { AvisosModule } from './avisos/avisos.module';
import { RolesModule } from './roles/roles.module';
import { EspecialidadModule } from './especialidad/especialidad.module';
import { GrupoModule } from './grupo/grupo.module';

@Module({
  imports: [ResponsableModule, AdministrativoModule, AlumnoModule, AvisosModule, RolesModule, EspecialidadModule, GrupoModule],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
