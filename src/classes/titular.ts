export class Titular {
    private nome: string;
    private cpf: string;
    private sexo: string;
    private renda?: number
    private dataNascimento: Date;
    private endereco?: string;
    private email?: string;
    private telefone?: string;

    constructor(nome: string, cpf: string, dataNascimento: Date, sexo: string) {
        this.nome = nome;
        this.cpf = cpf;
        this.sexo = sexo;
        this.dataNascimento = dataNascimento;
    }

    mostrarNome() {
        console.log(`Nome: ${this.nome}`)
    }

    mostrarIdade() {
        const hoje = new Date()
        const idade = hoje.getFullYear() - this.dataNascimento.getFullYear();
        console.log(`Idade: ${idade}`)
    }

    finalizarCadastro(renda?: number, email?: string, telefone?: string) {
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