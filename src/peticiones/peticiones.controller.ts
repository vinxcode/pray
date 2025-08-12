import { Controller, Get, Post, Body, Delete, Param, Render } from '@nestjs/common';
import { PeticionesService } from './peticiones.service';
import { Peticion } from '@prisma/client';

@Controller('peticiones')
export class PeticionesController {
  constructor(private readonly peticionesService: PeticionesService) {}

  @Post()
  async crear(@Body() data: { name: string }): Promise<Peticion> {
    return this.peticionesService.crearPeticion(data);
  }

  @Get()
  @Render('peticiones')
  async obtenerTodas() {
    const peticiones = await this.peticionesService.obtenerPeticiones();
    return { message: "Listado de peticiones", peticiones }
  }

  @Delete(':id')
  async eliminar(@Param('id') id: string): Promise<Peticion> {
    return this.peticionesService.eliminarPeticion(Number(id));
  }
}