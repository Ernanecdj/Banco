"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = void 0;
const conta_1 = require("./conta");
class ContaCorrente extends conta_1.Conta {
    constructor() {
        super(...arguments);
        this.txCPMF = 0.004;
    }
    sacar(valor) {
        if (valor <= this.saldo && valor > 0) {
            this.saldo -= valor;
            this.aplicarCPMF(valor);
        }
    }
    aplicarCPMF(valor) {
        this.saldo -= valor * this.txCPMF;
    }
    mostrarSaldo() {
        console.log(`Saldo CC: R$ ${this.saldo.toFixed(2)}`);
    }
}
exports.ContaCorrente = ContaCorrente;
