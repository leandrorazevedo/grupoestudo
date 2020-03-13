import { Test, TestingModule } from '@nestjs/testing';
import { ClientesController } from './clientes.controller';

describe('Clientes Controller', () => {
  let controller: ClientesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientesController],
    }).compile();

    controller = module.get<ClientesController>(ClientesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
