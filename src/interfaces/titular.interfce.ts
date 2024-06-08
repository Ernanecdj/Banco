export interface ITitular {
    nome: string;
    cpf: string;
    sexo: string;
    renda?: number
    dataNascimento: Date;
    endereco?: string;
    email?: string;
    telefone?: string;

    finalizarCadastro(renda: number, email: string, telefone: string, endereco: string): void;
}