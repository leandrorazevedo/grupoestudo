import express, { Request, Response } from 'express';

import { App } from './app';

// let app: App;

const routerDefault = express.Router();
const routerClientes = express.Router();

routerDefault.get('/', (req: Request, res: Response) => {
  res.send('tudo OK! OK !');
});

routerClientes.get('/teste', (req: Request, res: Response) => {
  res.send('Testando 123');
});

const app = new App(3000, [routerDefault, routerClientes]);

app.listen();
