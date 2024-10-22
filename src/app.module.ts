import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ResponsableModule } from './responsable/responsable.module';
import { AdministrativoModule } from './administrativo/administrativo.module';
import { AlumnoModule } from './alumno/alumno.module';
import { AvisosModule } from './avisos/avisos.module';
import { RolesModule } from './roles/roles.module';
import { EspecialidadModule } from './especialidad/especialidad.module';
import { GrupoModule } from './grupo/grupo.module';

@Module({
  imports: [
    // Configuración para la base de datos MySQL
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', // Asegúrate de definir tu password correcta
      database: 'cbtis248',
      autoLoadEntities: true, // Cargar automáticamente entidades
      synchronize: true, // Sincronizar entidades con la base de datos (desactiva en producción)
    }),
    ConfigModule.forRoot({ isGlobal: true }), // Configuración global
    
    // Módulos del proyecto
    ResponsableModule,
    AdministrativoModule,
    AlumnoModule,
    AvisosModule,
    RolesModule,
    EspecialidadModule,
    GrupoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
