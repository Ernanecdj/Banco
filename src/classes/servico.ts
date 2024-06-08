import { IOperacoesServico } from "../interfaces/OperacoesServico.interface";
import { IServico } from "../interfaces/servico.interface";

export class Servico implements IServico, IOperacoesServico {
    tipo: string;
    tx: number;
    ativo: boolean = true;

    constructor (tipo: string, tx: number) {
        this.tipo = tipo;
        this.tx = tx;
    }

    aplicarTx(tx: number): number {
        return 1;
    }

    removerTx(servico: object): boolean {
        return true;
    }
}
