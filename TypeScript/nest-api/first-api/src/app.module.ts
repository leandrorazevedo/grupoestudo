import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesController } from './cadastros/clientes/clientes.controller';
import { ClientesService } from './cadastros/clientes/clientes.service';

@Module({
  imports: [],
  controllers: [AppController, ClientesController],
  providers: [AppService, ClientesService],
})
export class AppModule {}
