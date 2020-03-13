var Pessoa = /** @class */ (function () {
    function Pessoa(nome) {
        this._nome = nome;
    }
    Pessoa.prototype.print = function () {
        console.log(this._nome);
    };
    return Pessoa;
}());
var p = new Pessoa('Cruzeirão da massa !!');
p.print();
var teste = 'teste dlfjls jfjd';
var joao;
joao = 10;
console.log(joao);
joao = 'dsljflksjd';
console.log(joao);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
var c = Color.Red;
console.log(Color[2]);
