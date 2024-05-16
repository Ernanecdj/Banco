"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Titular = void 0;
class Titular {
    constructor(nome, cpf, dataNascimento, sexo) {
        this.nome = nome;
        this.cpf = cpf;
        this.sexo = sexo;
        this.dataNascimento = dataNascimento;
    }
    mostrarNome() {
        console.log(`Nome: ${this.nome}`);
    }
    mostrarIdade() {
        const hoje = new Date();
        const idade = hoje.getFullYear() - this.dataNascimento.getFullYear();
        console.log(`Idade: ${idade}`);
    }
    finalizarCadastro(renda, email, telefone) {
        this.renda = renda;
        this.email = email;
        this.telefone = telefone;
    }
    get getCpf() {
        return this.cpf;
    }
    get getSexo() {
        return this.sexo;
    }
    get getRenda() {
        return this.renda;
    }
    get getEmail() {
        return this.email;
    }
    get getTelefone() {
        return this.telefone;
    }
    get getEndereco() {
        return this.endereco;
    }
}
exports.Titular = Titular;
