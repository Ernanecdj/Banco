"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = void 0;
const conta_1 = require("./conta");
class ContaPoupanca extends conta_1.Conta {
    constructor(agencia, numero, titular, txRendimento) {
        super(agencia, numero, titular);
        this.txRendimento = txRendimento;
    }
    mostrarSaldo() {
        console.log(`Saldo CP: R$ ${this.saldo.toFixed(2)}`);
    }
    calcularRendimento() {
        console.log(`Rendimento: R$ ${(this.saldo * (this.txRendimento / 100))}`);
    }
}
exports.ContaPoupanca = ContaPoupanca;
