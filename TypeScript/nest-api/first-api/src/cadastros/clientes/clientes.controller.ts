import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('clientes')
export class ClientesController {
  @Post()
  create(@Body() cliente: IClientes) {
    return cliente;
  }

  @Get()
  findAll() {
    return [
      { nome: 'leandro', email: 'leandro@gmail.com' },
      { nome: 'aureo', email: 'aureo@hotmail.com' },
    ];
  }

  @Get('id')
  findById() {}
}

interface IClientes {
  nome: string;
  email: string;
  idade: number;
}
