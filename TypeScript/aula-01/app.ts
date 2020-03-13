class Pessoa {
  private _nome: string;

  constructor(nome: string) {
    this._nome = nome;
  }

  print(): void {
    console.log(this._nome);
  }
}

let p = new Pessoa('Cruzeirão da massa !!');
p.print();

let teste = 'teste dlfjls jfjd';

let joao: any;

joao = 10;

console.log(joao);

joao = 'dsljflksjd';
console.log(joao);

enum Color {
  Red,
  Blue,
  Green
}

let c = Color.Red;

console.log(Color[2]);
