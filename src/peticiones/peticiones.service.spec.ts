import { Test, TestingModule } from '@nestjs/testing';
import { PeticionesService } from './peticiones.service';

describe('PeticionesService', () => {
  let service: PeticionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeticionesService],
    }).compile();

    service = module.get<PeticionesService>(PeticionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
