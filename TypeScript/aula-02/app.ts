import express, { RequestHandler } from 'express';

export class App {
  private app = express();

  constructor(private porta: number, routes: RequestHandler[]) {
    routes.forEach(item => {
      this.app.use(item);
    });
  }

  listen() {
    this.app.listen(this.porta, () => {
      console.log('rodando na porta 3000');
    });
  }
}
