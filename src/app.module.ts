import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeticionesModule } from './peticiones/peticiones.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismanestService } from './generate/prismanest/prismanest.service';
import { PeticionesService } from './peticiones/peticiones.service';

@Module({
  imports: [PeticionesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismanestService, PeticionesService],
})
export class AppModule {}
