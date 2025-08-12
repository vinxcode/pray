import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Peticion } from '@prisma/client'; // Tipos automáticos de Prisma!

@Injectable()
export class PeticionesService {
  constructor(private prisma: PrismaService) {} // Inyecta Prisma

  // Crear una nueva petición
  async crearPeticion(data: { name: string }): Promise<Peticion> {
    return this.prisma.peticion.create({
      data,
    });
  }

  // Obtener todas las peticiones
  async obtenerPeticiones(): Promise<Peticion[]> {
    return this.prisma.peticion.findMany();
  }

  // Eliminar una petición por ID
  async eliminarPeticion(id: number): Promise<Peticion> {
    return this.prisma.peticion.delete({
      where: { id },
    });
  }
}