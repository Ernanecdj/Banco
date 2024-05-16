"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    constructor(agencia, numero, titular) {
        this.agencia = agencia;
        this.numero = numero;
        this.titular = titular;
        this.saldo = 0;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    sacar(valor) {
        if (valor <= this.saldo && valor > 0) {
            this.saldo -= valor;
        }
    }
    mostrarSaldo() {
        console.log(`Saldo: R$ ${this.saldo.toFixed(2)}`);
    }
    get getAgencia() {
        return this.agencia;
    }
    set setAgencia(agencia) {
        this.agencia = this.agencia;
    }
    get getNumero() {
        return this.numero;
    }
    set setNumero(numero) {
        this.numero = this.numero;
    }
    get getTitular() {
        return this.titular;
    }
    set setTitular(titular) {
        this.titular = this.titular;
    }
}
exports.Conta = Conta;
