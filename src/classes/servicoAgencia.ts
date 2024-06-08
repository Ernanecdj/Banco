import { Servico } from "./servico";
import { ServicoEstado } from "./servicoEstado";
import { ServicoMunicipio } from "./servicoMunicipio";

export class ServicoAgencia extends Servico {
    constructor(tipo: string = "TX AGENCIA", tx: number = 0) {
        super(tipo, tx)
    }
    
    atribuirTx() {
        this.tx = 10.0;        
    }
}